import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useEffect, useState } from 'react';
import axios from "axios";
import {useNavigate, Route,Routes,useLocation} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';
import ErrorPage from './components/error/error';
import Forms from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites';

function App() {
   const navigate=useNavigate();
   let[access,setAccess]=useState(false);
   let EMAIL='bryan201429@gmail.com'
   let PASSWORD='201429'

   // const login=(userData)=>{
      // if(userData.email===EMAIL && userData.password===PASSWORD){
      //    setAccess(true);
      //    navigate('/home');
      // }
      // else{ 
      //    alert("Incorrect data");
      // }
   // }
    const login= async(userData) =>{
      // const { email, password } = userData;
      // const URL = 'http://localhost:3001/rickandmorty/login/';
      // axios(URL + `?email=${email}&password=${password}`)
      // .then(({ data }) => {
      //    const { access } = data;
      //    setAccess(access);
      //    access && navigate('/home');
      // });
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const { email, password } = userData;
         const {data}= await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home'); //Si access es true, go home

      } catch (error) {
         console.log(error.message);
      }

   }
   

   useEffect(()=>{
      !access && navigate('/');
   },[access]);

   let[characters,setCharacters]=useState([]); 
   async function  onSearch (id){
               //axios(`http://localhost:3001/rickandmorty/character/${id}`)
         // .then(({ data }) => {
         //    if (data.name) {
         //       setCharacters((oldChars) => [...oldChars, data]);
         //    } else {
         //       window.alert('¡No hay personajes con este ID!');
         //    }
         // });
      try {
         const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if(data.name){ 
            setCharacters((oldChars) => [...oldChars, data]);
         };
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }

   }

   function onClose(id){
         let Lista= characters.filter(character=>character.id !== Number(id))
         setCharacters(Lista); //window.alert('Cerrando');
   }

   function randomHandler(){
      let haveIt=[]
      let random=(Math.random()*826).toFixed();
      random=Number(random);
      if(!haveIt.includes(random)){
         axios.get(`http://localhost:3001/rickandmorty/character/${random}`)
         .then((response) => {
           const data = response.data;
           if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
           } else {
             window.alert("Ya se agregó el personaje");
             return false;
           }
         })
         .catch((err) => {
           // Manejar el error
         });
         }
      }
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
                  <Route path='/favorites' element={<Favorites/>}/>
            </Routes>
            </div>
   </>
   );
}
export default App;
