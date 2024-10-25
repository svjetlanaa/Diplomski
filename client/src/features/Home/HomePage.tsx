import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import backgroundImage from '/images/pozadina/biciklizam-home2.jpg'; 

export default function HomePage() {
  const sliderRef = useRef<Slider>(null); // Eksplicitno navođenje tipa ref-a

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Korištenje slickNext metode bez greške
      }
    }, 3000); // Promijenite interval rotacije slika prema potrebi (ovdje svakih 5 sekundi)

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
      <div className='logo'>
          <img src="/images/pozadina/Logo2.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 620 }} />
         
        </div>

        <div className='biciklizam'>
          <img src="/images/pozadina/biciklizam.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 700 }} />
          <div style={{marginTop:'-620px', marginLeft:'720px', transform: 'translate(-50%, -50%)', textAlign: 'center', fontWeight:'bold', color: 'black', width: '100%' }}>
            
            
          </div>
        </div>

        <div className='planinarenje'>
          <img src="/images/pozadina/planinarenje.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 700 }} />
          <div style={{marginTop:'-520px', marginLeft:'520px', transform: 'translate(-50%, -50%)', textAlign: 'center', fontWeight:'bold', color: 'black', width: '100%', textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3);' }}>
            
            
          </div>
        </div>
     
        <div className='kajak'>
          <img src="/images/pozadina/kajak.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 700 }} />
          <div style={{marginTop:'-520px', marginLeft:'520px', transform: 'translate(-50%, -50%)', textAlign: 'center', fontWeight:'bold', color: 'black', width: '100%', textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3);' }}>
            
           
          </div>
        </div>
        <div className='kamp'>
          <img src="/images/pozadina/kam.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 620 }} />
          <div style={{marginTop:'-520px', marginLeft:'520px', transform: 'translate(-50%, -50%)', textAlign: 'center', fontWeight:'bold', color: 'black', width: '100%', textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3);' }}>
            
            
          </div>
        </div>
       
      
          
        <div>
          <img src="/images/pozadina/kvad.png" alt="hero" style={{ display: 'block', width:'100%', maxHeight: 673}} />
          <div style={{marginTop:'-100px', marginLeft:'700px', transform: 'translate(-50%, -50%)', fontWeight:'bold', textAlign: 'center', color: '#004d99', width: '100%' }}>

            <Typography variant="h3" >Postani i ti jedan od naših zadovoljnih korisnika!</Typography>
          </div>
        </div>
        
       
      </Slider>

      
    </>
  );
}
