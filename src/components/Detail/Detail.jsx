import axios from "axios"
import {useParams} from 'react-router-dom';
import { useState,useEffect} from "react";
import {Detail_style,ImgContainer,TextContainer} from './Detail_style.js';

export default function Detail(){
    
    const [character,setCharacter]=useState([])
    const {id}=useParams();        //Extrae el Id desde donde nos llaman

    useEffect(() => {
        
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response)=>response.json())
        .then((char)=>{
            if(char.name){
                setCharacter(char);
            } else{
                window.alert("No hay personajes en ese ID");
            }
        })
        .catch((err)=>{
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});     
        },[id]);
        
    return(
        <>
        <Detail_style>
            <TextContainer>
                <div>
                    <h2>{character.name}</h2>
                </div>
                <div>
                    <h3>Status |</h3>
                    <p>{character.status}</p>
                </div>
                <div>
                    <h3>Gender |</h3>
                    <p>{character.gender}</p>
                </div>
                <div>
                    <h3>Specie | </h3>
                    <p>{character.species}</p>
                </div>
                <div>
                    <h3>Origin | </h3>
                    <p>{character.origin?.name}</p>
                </div>
                <div>
                    <h3>Location | </h3>
                    <p>{character.location?.name}</p>
                </div>
            </TextContainer>
            <ImgContainer>
                    <img src={character.image} alt={character.name}></img>
            </ImgContainer>
        </Detail_style>
        
        </>
    )
}