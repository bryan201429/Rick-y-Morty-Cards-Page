import { ErrorResponse } from "@remix-run/router";
import axios from "axios";
import { ADD_FAV,ORDER,REMOVE_FAV,FILTER } from "./action-types"

// export function addFav(character){
//     return {
//         type:ADD_FAV,
//         payload: character,
//     }
// }

// ACTION | addFav
export  const addFav = (character) => {
   //  const endpoint = 'http://localhost:3001/rickandmorty/fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: 'ADD_FAV',
   //           payload: data,
   //        });
   //     });
   //  };
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
         return async(dispatch) => {
            try {
               const {data}= await axios.post(endpoint, character)
               if(!data.length)throw Error('No hay favorito')
               return dispatch({
                  type: 'ADD_FAV',
                  payload: data,
               });
         
            }catch (error) {
               console.log(error.message);
      }
   }
 };

 
// export function removeFav(id){
//     return{
//         type:REMOVE_FAV,
//         payload: id,
//     }
// }

// ACTION | removeFav
export const removeFav =  (id) => {

   //  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   //  return (dispatch) => {
   //     axios.delete(endpoint).then(({ data }) => {
   //        return dispatch({
   //           type: 'REMOVE_FAV',
   //           payload: data,
   //     });
   //     });
   //  };

  
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
      try {
         const {data}= await axios.delete(endpoint)
         //if(!data.length)throw Error('No hay favorito')
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });      
   } catch (error) {
      console.log(error.message)
}}
 };
 

export function filterCards(gender){
    return{
        type:FILTER,
        payload:gender,
    }
}

export function orderCards(orden){
    return{
        type:ORDER,
        payload:orden,
    }
}