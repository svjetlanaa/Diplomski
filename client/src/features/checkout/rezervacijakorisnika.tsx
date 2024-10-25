import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import BasketSummary from "../basket/BasketSummasry";
import BasketTable from "../basket/BasketTable";
import { useAppSelector } from "../../app/store/configureStore";
import { useState } from "react";
import dayjs from "dayjs";

export default function Rezervacijakorisnika(){
  const {basket} = useAppSelector(state =>state.basket);
  const dateNow = dayjs().format().split("T")[0];
  const[dateFrom, setDateFrom] = useState(dateNow);
  const[dateTo, setDateTo] = useState(dateNow);
  return (
   <>
     <Typography variant="h6" gutterBottom>
     Pregled narudžbe
   </Typography>
   {basket &&
   <BasketTable days={basket.days} items={basket.items} isBasket={false} isOrder={false}/>}
     <Grid container>
       <Grid item xs={6}/>
       <Grid item xs={6}>
         <BasketSummary/>
        
     
     </Grid>

   </Grid>
   <Button 
       
        variant="contained"
        size="large"
        onClick={async () =>{
          
          alert("Uspješno rezervisana oprema!");
        }}
        fullWidth>POTVRDI REZERVACIJU</Button>
   </>

  )
}