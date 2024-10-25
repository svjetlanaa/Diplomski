import { Button, ButtonGroup, Tab, Table, TableRow, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";
import { NavLink } from "react-router-dom";

export default function ContactPage(){
    const{data, title}=useAppSelector(state=>state.counter);
    const dispatch=useAppDispatch();
    return(
        <Table>
            <TableRow>
                <Typography variant="h2" style={{fontFamily:'algerian', marginBottom: '35px'}}>Kontakt</Typography>
            </TableRow>
            <TableRow>
            <Typography variant="h4" style={{fontFamily:'algerian', marginBottom: '15px'}}>Kako nas kontaktirati?</Typography>
        </TableRow>
            <TableRow>
            <Typography style={{marginBottom: '15px'}} fontSize={20}>
            Kontaktirati nas možeš putem e-mail: info@iznajmljivanje_opreme.com, te broja telefona +387 65 222 333. Za sve Vaše upite smo dostupni 0-24, sedam dana u sedmici. 

            </Typography>
        </TableRow>
        <TableRow>
                <Typography variant="h4" style={{fontFamily:'algerian', marginBottom: '35px'}}>Osnovni podaci o preduzeću</Typography>
            </TableRow>
        <TableRow>
            <Typography style={{marginBottom: '15px'}} fontSize={20}>
           NAZIV PREDUZEĆA: RentX d.o.o.
            </Typography>
        </TableRow>
        <TableRow>
            <Typography style={{marginBottom: '15px'}} fontSize={20}>
           SJEDIŠTE PREDUZEĆA: Vuka Karadžića 6, 71000 Sarajevo
            </Typography>
        </TableRow>
        <TableRow>
            <Typography style={{marginBottom: '15px'}} fontSize={20}>
           TELEFON: +387 65/222-333
            </Typography>
        </TableRow>
        <TableRow>
            <Typography style={{marginBottom: '15px'}} fontSize={20}>
            EMAIL: iznajmljivanje_opreme@gmail.com
            </Typography>
        </TableRow>



            
        </Table>
       

    )
}