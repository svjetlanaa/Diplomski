import { Box, Button, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import { validationsShema } from "./chechoutValidations";
import agent from "../../app/api/agent";
import { useDispatch } from "react-redux";
import { clearBasket } from "../basket/basketSlice";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { LoadingButton } from "@mui/lab";
import { StripeElementType } from "@stripe/stripe-js";
import { CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";

const steps = ['Podaci o korisniku', 'Pregled narudzbe', 'Placanje'];



export default function CheckoutPage() {
   
    const [activeStep, setActiveStep] = useState(0);
    const[orderNumber, setOrderNumber] = useState(0);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const [cardState, setCardState]= useState<{elementError: {[key in StripeElementType]?: string}}>({elementError:{}});
    const [cardComplete, setCardComplete]= useState<any>({cardNumber: false, cardExpiry:false, cardCvc:false});
    const [paymentMessage, setPaymentMessage] = useState('');
    const [paymentSucceded, setPaymentSucceded]= useState(false);
    const {basket}= useAppSelector(state =>state.basket);
    const stripe = useStripe();
    const elements= useElements();


    function onCardInputChange(event: any){
      setCardState({
        ...cardState,
        elementError:{
          ...cardState.elementError,
          [event.elementType]: event.error?.message
        }
      })
      setCardComplete({...cardComplete, [event.elementType]: event.complete});
    }
    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return <AddressForm/>;
            case 1:
                return <Review/>;
            case 2:
                return <PaymentForm cardState={cardState} onCardInputChange={onCardInputChange}/>;
            default:
                throw new Error('Unknown step');
        }
    }

    const currentValidationSchema = validationsShema[activeStep];
    const methods = useForm({
        mode: 'all',
        resolver: yupResolver(currentValidationSchema)
    });

    useEffect(()=>{
        agent.Account.fetchAddress()
            .then(response=>{
                if(response) {
                    methods.reset({...methods.getValues(), ...response, saveAddress: false})
                }
            })
    },[methods])

    async function submitOrder(data: FieldValues){
        setLoading(true);
        const {nameOnCard, saveAddress, ...shippingAddress}= data;
        if(!stripe || !elements) return;
        try{
            const cardElement = elements.getElement(CardNumberElement);
            const paymentResult = await stripe.confirmCardPayment(basket?.clientSecret!,{
                payment_method:{
                    card:cardElement!,
                    billing_details:{
                        name:nameOnCard
                    }
                }
            });
            console.log(paymentResult);
            if(paymentResult.paymentIntent?.status === 'succeeded'){
                const orderNumber = await agent.Orders.create({saveAddress, shippingAddress});
                    setOrderNumber(orderNumber);
                    setPaymentSucceded(true);
                    setPaymentMessage('Hvala Vam - primili smo Vasu uplatu')
                    setActiveStep(activeStep+1);
                    dispatch(clearBasket());
                    setLoading(false);
                    

            }else{
                setPaymentMessage(paymentResult.error? "Broj kartice nije potpun!" : "");
                setPaymentSucceded(false);
                setLoading(false);
                setActiveStep(activeStep+1);
                
            }

        }catch(error){
            console.log(error);
            setLoading(false);
        }

    }
        


    const handleNext = async (data:FieldValues) => {
       
        if(activeStep===steps.length-1) {
              await submitOrder(data);
            }else{
                setActiveStep(activeStep + 1);

            }  
        };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    function submitDisabled(): boolean{
        if(activeStep === steps.length-1){
            return !cardComplete.cardCvc
            || !cardComplete.cardExpiry
            || !cardComplete.cardNumber
            || !methods.formState.isValid
        }
        else{
            return !methods.formState.isValid
        }
    }

    return (
        <FormProvider {...methods}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
            <Typography component="h1" variant="h4" align="center">
                ONLINE NAPLATA
            </Typography>
            <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <>
                {activeStep === steps.length ? (
                    <>
                        <Typography variant="h5" gutterBottom>
                           {paymentMessage}
                        </Typography>
                        {paymentSucceded ? (
                             <Typography variant="subtitle1">
                             Vaš broj narudžbe je  #{orderNumber}. Na e-mail smo Vam poslali pregled Vaše narudžbe.
                         </Typography>

                        ) : (
                            <Button variant='contained' onClick={handleBack}>
                                Vrati se i pokusaj ponovo
                            </Button>
                        )}
                       
                    </>
                ) : (
                    <form onSubmit={methods.handleSubmit(handleNext)}>
                        {getStepContent(activeStep)}
                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                                    Nazad
                                </Button>
                            )}
                            <LoadingButton
                            loading={loading}
                            disabled={submitDisabled()}
                                variant="contained"
                               type='submit'
                                sx={{mt: 3, ml: 1}}
                            >
                                {activeStep === steps.length - 1 ? 'Naruci' : 'Dalje'}
                            </LoadingButton>
                        </Box>
                    </form>
                )}
            </>
        </Paper>
            

        </FormProvider>
        
    );
}


