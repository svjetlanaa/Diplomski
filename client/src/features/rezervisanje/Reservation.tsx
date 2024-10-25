/*import React, { useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const Reservation = () => {
    const [customerName, setCustomerName] = useState('');
    
    return (
        <div>
            <h2>Formular za rezervaciju</h2>
            <form onSubmit={handleReservation}>
                <label>
                    Ime kupca:
                    <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email kupca:
                    <input type="text" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
                </label>
                
                <br />
                <label>
                    Datum Iznajmljivanja:
                    <input type="date" value={datumIznajmljivanja} onChange={(e) => setDatumIznajmljivanja(e.target.value)} />
                </label>
                <br />
                <label>
                    Datum Vraćanja:
                    <input type="date" value={datumVracanja} onChange={(e) => setDatumVracanja(e.target.value)} />
                </label>
                <br />
                <button type="submit">Rezerviši</button>
            </form>
        </div>
       

    );
};

export default Reservation*/
/*
import React, { useState } from 'react';
import axios from 'axios';

function Reservation() {
    const [productId, setProductId] = useState('');
   
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [datumIznajmljivanja, setDatumIznajmljivanja] = useState('');
    const [datumVracanja, setDatumVracanja] = useState('');

    const handleSubmit = async (event:any) => {
        event.preventDefault(); // Spriječiti defaultno ponašanje forme (slanje na server)

        try {
            // Slanje podataka na server
            const response = await axios.post('/api/basket/reserve', {
                productId:1,
                customerName: "Marko",
                customerEmail: "marko@test",
                datumIznajmljivanja: "25/05/2024",
                datumVracanja:"25-04-2024"
            });
            console.log('Podaci su uspješno poslani:');
            console.log(response)
            alert('Podaci su uspješno poslani i spremljeni u bazu.');
        } catch (error) {
            console.error('Greška prilikom slanja podataka:', error);
            alert('Došlo je do greške prilikom slanja podataka.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
          
            <button type="submit">Spremi</button>
        </form>
    );
}

export default Reservation;*/





import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // useEffect se izvršava nakon svakog renderiranja komponente
  useEffect(() => {
    // Update dokumenta naslova koristeći DOM API
    document.title = `Count: ${count}`;
  });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;




