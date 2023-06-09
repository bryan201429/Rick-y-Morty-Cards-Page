import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const Carta = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
width: 15vw;
min-width:200px;
height: auto;
margin: 0px;
background-color:rgba(50,50,50,0.7);


padding 0em;        //Espacio entre items internos y borde
margin: 0.5em;   
border-radius:10px;
border:solid;
border-width: 0.4em;
border-color:rgba(10,10,10,0.1);

transition:box-shadow .3s ease-in-out,
 background-color 0.8s,transform 0.8s ;

& img{
   margin-bottom:auto;     //AJUSTAR LA IMG HACIA ARRIBA
   border-radius:5px;
   max-width:100%;
   height:auto;
   //object-fit:cover;
}
& h2{ 
   flex:auto;
   font-size:2vh;
   color:white;
   height:auto;
   margin:0px;
}
& button{
   margin-top:auto;
   width:100%;
   margin-bottom:0;
   height: 5%;
   color:white;
   background:gray;
   :hover{
      background:red;
      box-shadow: inset 0 0 20px yellow;
   }
}
& hr{
   margin-top:20px;
   margin-bottom:20px;
   background-color:white;
   border:0px;
   width:90%;
   height:2px;
   box-shadow: 1px 1px 5px rgba(255, 255, 255, 1), 
   -1px -1px 5px rgba(255, 255, 255, 1),
   -1px 1px 5px rgba(255, 255, 255, 1),
   1px -1px 5px rgba(255, 255, 255, 1);
}

:hover {
   /* Resto del código */
   background-color:rgba(10,10,10,0.8);
   box-shadow: 5px 5px 30px rgba(0, 255, 50, 1), 
   -5px -5px 30px rgba(0, 255, 50, 1),
   -5px 5px 30px rgba(0, 255, 50, 1),
   5px -5px 30px rgba(0, 255, 50, 1);
   
   //transform: scale(1.15, 1.15);
      & hr{
         background-color:rgba(0,255,0,1);
         box-shadow: 1px 1px 5px rgba(0, 255, 0, 1), 
         -1px -1px 5px rgba(0, 255, 0, 1),
         -1px 1px 5px rgba(0, 255, 0, 1),
         1px -1px 5px rgba(0, 255, 0, 1);
      }
   }

&.rotating {
   transition: 
   box-shadow .2s ease-in-out,
   transform 0s ease-in-out;
   }


`;

console.log(Carta);

export default function Card({ onClose, id, name, status, species, gender, origin, image }) {
   const cartaRef = useRef(null);
   const isRotatingRef = useRef(false);
   const navigate= useNavigate();

   function navigateHandler(){

      navigate(`/detail/${id}`)
    }

   useEffect(() => {
      const cartaElement = cartaRef.current;
      const handleMouseMove = (event) => {
         if (!isRotatingRef.current) {
            isRotatingRef.current = true;
            cartaElement.classList.add('rotating');
         }
         const { layerX, layerY } = event;
         const width = cartaElement.clientWidth;
         const height = cartaElement.clientHeight;
         const yRotation = ((layerX - width / 2) / width) * 30;
         const xRotation = ((layerY - height / 2) / height) * 30;
         console.log(xRotation,yRotation)
         cartaElement.style.transform = ` scale(1.15, 1.15) perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      };

      const handleMouseLeave = () => {
         isRotatingRef.current = false;
         cartaElement.classList.remove('rotating');
         cartaElement.style.transform = 'scale(1, 1)';
      };
      cartaElement.addEventListener('mousemove', handleMouseMove);
      cartaElement.addEventListener('mouseleave', handleMouseLeave);
      return () => {
         cartaElement.removeEventListener('mousemove', handleMouseMove);
         cartaElement.removeEventListener('mouseleave', handleMouseLeave);
      };
   }, []);

   return (
      <Carta ref={cartaRef}>
                  
         <img src={image} alt='' onClick={navigateHandler}/>
         <br></br>
         <h2>{name}</h2>
         <hr></hr>

         <h2>id: {id}</h2>         
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <button onClick={()=>onClose(id)}>X</button>
      </Carta>
   );
}