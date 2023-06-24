import { ADD_FAV, REMOVE_FAV,FILTER, ORDER} from "./action-types"
import { Action } from "@remix-run/router"

const initialState = {
  myFavorites: [],
  allCharacters: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case ADD_FAV:
    //   return {
    //     ...state,
    //     myFavorites: [...state.myFavorites, payload],
    //     allCharacters: [...state.allCharacters, payload]
    //   }
    // REDUCER | ADD_FAV
    case 'ADD_FAV':
          return { ...state, myFavorites: payload, allCharacters: payload };

    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
    //   }

    // REDUCER | REMOVE_FAV
    case 'REMOVE_FAV':
          return { ...state, myFavorites: payload };

    case FILTER:
        const allCharactersFiltered =state.allCharacters.filter(character => character.gender === payload)  
        return {
            ...state,
            myFavorites: 
            payload==='allCharacters'?
            [...state.allCharacters]
            :allCharactersFiltered
      }

    case ORDER:
      const allCharactersFavCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites: payload === 'Ascendente'
          ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
          : allCharactersFavCopy.sort((a, b) => b.id - a.id)
      }

    default:
      return { ...state }
  }
}

export default reducer;