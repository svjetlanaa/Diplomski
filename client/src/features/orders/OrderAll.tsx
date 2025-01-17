import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import  { Order } from "../../app/layout/models/order";
import { currencyFormat } from "../../app/util/util";
import OrderDetailed from "./OrderDetailed";
import PregledNarudzbe from "../admin/PregeledNarudzbe";



export default function OrdersAll(){
    const [orders, setOrders] = useState<Order[] | null>(null);
    const [loading, setLoading]= useState(true);
    const [selectedOrderNumber, setSelectedOrderNumber]=useState(0);
 


    useEffect(() =>{
        setLoading(true);
        agent.Orders.listAll()
            .then(orders =>setOrders(orders))
            .catch(error=>console.log(error))
            .finally(()=>setLoading(false))
    }, [])

    if(loading) return<LoadingComponent message ='Loading orders....'/>

    if(selectedOrderNumber>0) 
      return (
      <PregledNarudzbe
      order={orders?.find((o)=>o.id === selectedOrderNumber)!}
      setSelectedOrder = {setSelectedOrderNumber}
        />
    );

    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order number</TableCell>
              <TableCell>Kupac</TableCell>
              <TableCell align="right">Ukupno</TableCell>
              <TableCell align="right">Datum narudzbe</TableCell>
              <TableCell align="right">Status narudzbe</TableCell> 
             
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <TableRow
                key={order.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.id}
                </TableCell>
                <TableCell align="right">{order.bUyerId}</TableCell>
                <TableCell align="right">{currencyFormat(order.total)}</TableCell>
                <TableCell align="right">{order.orderData.split('T')[0]}</TableCell>
                <TableCell align="right">{order.orderStatus}</TableCell>
                <TableCell align="right">
                
                    <Button onClick={() => setSelectedOrderNumber(order.id)}>
                      Pregled
                      </Button>
                     
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
    );

}