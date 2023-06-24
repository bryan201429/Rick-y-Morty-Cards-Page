
import { useState } from "react";
import {SearchContainer, SearchInput,SearchIcon,SearchIconContainer } from "./SearchBar_styles";
import Random from '../SearchBar/Random_button/Random'

export default function SearchBar(props) {
   const {onSearch}=props;             // Extrae la función onSearch que le llegar por props
   const [id,setId]=useState("");

   function handleChange(event){  //event contiene toda la informacion del evento que llega desde donde se generó
      event.preventDefault();     //Evita enviar el formulario al apretar enter
      setId(event.target.value);  //id:event.target.value es el valor desde donde se invoca la func
   }
   //Esta funcion se ejecutara cada vez que haya un cambio en SearchInput

   return (
      <SearchContainer>
         <SearchInput type="search" value={id} onChange={handleChange}/>  
         <SearchIconContainer>
            <SearchIcon onClick={()=>onSearch(id)}/>
         </SearchIconContainer>
         <Random  random={props.random}></Random>
      </SearchContainer>
   );
}