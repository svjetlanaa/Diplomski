import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Reservation } from "../../app/layout/models/order";

export default function PregledRezervacije()
{
    const [orders, setOrders] = useState <Reservation[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedOrderNumber, setSelectedOrderNumber]= useState(0);

    useEffect(()=>{
        setLoading(true);
        agent.Reservations.list()
            .then((orders) =>setOrders(orders))
            .catch((error) =>console.log(error))
            .finally(()=>setLoading(false));
    },[])

    if(loading) return <LoadingComponent message="Loading reser..."/>

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth:650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Broj rezervacije</TableCell>
                        <TableCell>Kupac</TableCell>
                        
                        <TableCell>ID proizvooda</TableCell>
                        <TableCell>Od</TableCell>
                        <TableCell>Do</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((order)=>(
                        <TableRow key={order.id}
                        sx={{"&:last-child td, &:last-child th":{border:0}}}
                        >
                            <TableCell component="th" scope="row">
                                {order.id}
                            </TableCell>
                            <TableCell align="left">
                                {order.customerName}

                            </TableCell>{" "}
                            <TableCell align="center">{order.productId}</TableCell>
                            <TableCell align="right">
                            {order.reservedFrom.split("T")[0]}
                                
                            </TableCell>
                            <TableCell align="right">
                                {order.reservedTo.split("T")[0]}
                            </TableCell>
                            <TableCell align="right">
                               
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
    }

   