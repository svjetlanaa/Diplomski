import { Table, TableRow, Typography } from "@mui/material";
import { useAppSelector } from "../../app/store/configureStore";

export default function Profil(){
    const {user}=useAppSelector(state=>state.account);

    return (
        <Table>
            <TableRow>
        <Typography variant="h2" style={{fontFamily:'algerian', marginBottom: '15px'}}>Pregled profila</Typography>
        </TableRow>
        <TableRow>
        <img src="/images/pozadina/images.jpg" alt="korisnik"/>
        </TableRow>
        <TableRow>
            <Typography variant="body1" style={{marginBottom:'15px', fontWeight:'bold'}}>IME KORISNIKA:  {user?.userName}</Typography>
            
        </TableRow>
        <TableRow>
            <Typography variant="body1" style={{marginBottom:'15px', fontWeight:'bold'}}>EMAIL:  {user?.email}</Typography>
            
        </TableRow>
    
        
        </Table>
        
    )
}