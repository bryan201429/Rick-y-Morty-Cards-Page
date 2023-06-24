import Card from "../Card";
import {connect} from 'react-redux';
import { useSelector,useDispatch } from "react-redux";
import { orderCards, filterCards} from '../../redux/actions';
import {useState} from "react";

const Favorites = ({myFavorites})=>{
//export default function Favorites (myFavorites){
    const dispatch=useDispatch();
    //const favorites= useSelector(state=>state.myFavorites) 

    const [aux,setAux]=useState(false);
    const handleOrder=(e)=>{
        dispatch(orderCards(e.target.value))
        setAux(true);
    }
    
    const handleFilter=(e)=>{
        dispatch(filterCards(e.target.value  ))
    }

    return(
        <div>
            <select placeholder="Gender" onChange={handleFilter}>
            {["Male","Female","Genderless","unknown","allCharacters"].map((gender)=>
            (<option value={gender}>{gender}</option>)
            )} </select>

            <select placeholder="Orden" onChange={handleOrder} >
            {["Ascendente","Descendente"].map(order=>
                (<option value={order}>{order}</option>))             
                }  </select>
 

            {myFavorites?.map(fav =>{
                return (
                    <Card key={fav.id} 
                    id={fav.id} 
                    name={fav.name}
                    species={fav.species} 
                    gender={fav.gender}
                    image={fav.image}
                    onClose={fav.onClose}
                    ></Card>
                )})}
        </div>
    )
}



const mapStateToProps=(state)=>{
    return{
        myFavorites:state.myFavorites
    }
}
export default connect(
    mapStateToProps, null
)(Favorites);
