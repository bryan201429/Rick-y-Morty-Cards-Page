import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useEffect, useState } from 'react';
import axios from "axios";
import {useNavigate, Route,Routes,useLocation} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';
import ErrorPage from './components/error/error';
import Forms from './components/Forms/Forms';
import { navigation } from '@11ty/eleventy-navigation';

function App() {
   const navigate=useNavigate();
   let[access,setAccess]=useState(false);
   let EMAIL='bryan201429@gmail.com'
   let PASSWORD='201429'

   const login=(userData)=>{
      if(userData.email===EMAIL && userData.password===PASSWORD){
         setAccess(true);
         navigate('/home');
      }
      else{ 
         alert("Incorrect data");
      }
   }
   useEffect(()=>{
      !access && navigate('/');
   },[access]);

   let[characters,setCharacters]=useState([]); 
   function onSearch(id){
      //setCharacters([...characters,example])        //...characters: es el resto de elementos
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });}
   function onClose(id){
         let Lista= characters.filter(character=>character.id !== Number(id))
         setCharacters(Lista); //window.alert('Cerrando');
   }

   function randomHandler(){
      let haveIt=[]
      let random=(Math.random()*826).toFixed();
      random=Number(random);
      if(!haveIt.includes(random)){
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then((response)=>response.json())
         .then((data)=>{
            if(data.name){
               setCharacters((oldChars)=>[...oldChars,data]);
            } else{
               window.alert("Ya se agregó el personaje");
               return false;
            }
   })}}
   let location=useLocation();

   return (
   <>
            <div className='App'>
               {!(location.pathname==="/") && <Nav onSearch={onSearch} random={randomHandler}></Nav>}
               <Routes>
                  <Route path='/' element={<Forms login={login}/>}> </Route>
                  <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/detail/:id' element={<Detail/>}></Route>
                  <Route path='*' element={<ErrorPage/>}></Route>
            </Routes>
            </div>
   </>
   );
}
export default App;
