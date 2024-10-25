import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Paper, Table, TableRow, Typography } from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";
import { TabContext } from "@mui/lab";

export default function AboutePage(){
   /* const [validationErrors, setValidationErrors]=useState<string[]>([]);
    function getValidationError(){
        agent.TestError.getValidationError()
             .then(()=>console.log('should not see this'))
             .catch(error=>setValidationErrors(error));
    }
    return(
        <Container>
            <Typography gutterBottom variant="h2">Greska prilikom testiranje</Typography>
            <ButtonGroup fullWidth>
                <Button variant="contained" onClick={()=>agent.TestError.get400Error().catch(error=>console.log(error))}>Test 400 Error</Button>
                <Button variant="contained" onClick={()=>agent.TestError.get401Error().catch(error=>console.log(error))}>Test 401 Error</Button>
                <Button variant="contained" onClick={()=>agent.TestError.get404Error().catch(error=>console.log(error))}>Test 404 Error</Button>
                <Button variant="contained" onClick={()=>agent.TestError.get500Error().catch(error=>console.log(error))}>Test 500 Error</Button>
                <Button variant="contained" onClick={getValidationError}>Test validations Error</Button>
            </ButtonGroup>
            {validationErrors.length>0 &&
            <Alert severity="error">
                <AlertTitle>Validation Error</AlertTitle>
                <List>
                    {validationErrors.map(error=>(
                        <ListItem key={error}>
                            <ListItemText>{error}</ListItemText>
                        </ListItem>
                    ))}
                </List>
                    </Alert>}
        </Container>
    )*/

    return(
        <Table>
            <TableRow>

        <Typography variant="h2" style={{fontFamily:'algerian', marginBottom: '35px'}}>O nama</Typography>
        </TableRow>
        <TableRow>
            <Typography variant="h4" style={{fontFamily:'algerian', marginBottom: '15px'}}>Šta je RentX?</Typography>
        </TableRow>
        <TableRow>
            <Typography style={{marginBottom: '15px'}} fontSize={20}>RentX, odnosno iznajmljivanje sportske opreme, je nastao u želji da pružimo vrhunsku i pouzdanu uslugu iznajmljivanja opreme po pristupačnim cijenama, za sve uzraste.

            </Typography>
        </TableRow>
        <TableRow>
            <Typography variant="h4" style={{fontFamily:'algerian', marginBottom: '15px'}}>Šta nudi RentX?</Typography>
        </TableRow>
        <TableRow>
            <Typography style={{marginBottom: '15px'}} fontSize={20}>
            Nudimo iznajmljivanje sportske opreme za grad Sarajevo, ali naši korisnici su koristili našu opremu i širom Evrope!
            Uz usluge iznajmljivanja sportske opreme na raspolaganju imamo i opremu za ljubitelje adrenalina, kao i za odmor.
            Uz opremu moguće je iznajmiti i prateće rekvizite.
            Kod nas možete pronaći opremu i za najmlađe ljubitelje avanture. 
            Mlad smo i perspektivan tim koji želi ponuditi najbolju i najširu lepezu usluga za sve naše korisnike. 
            </Typography>
            </TableRow>
            <TableRow>
            <Typography variant="h4" style={{fontFamily:'algerian', marginBottom: '15px'}}>Koju opremu nudi RentX?</Typography>
        </TableRow>
        <TableRow>
            <Typography style={{marginBottom: '15px'}} fontSize={20}>
           Nudimo opremu za Biciklizam, Planinarenje, Skijanje, Kajak, kao i Kmapovanje.
           U ponudi imamo jos i Kvadove kao i Električna bicikla i trotinete.
            </Typography>
            </TableRow>

        </Table>
    )
    
}