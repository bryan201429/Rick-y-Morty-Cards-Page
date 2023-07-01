let myFavorites=[];
require('dotenv').config();
const {User,Favorite} = require('../DB_connection')     //Exportados desde ...sequelize.models

const postFav =(req,res)=>{

    try {
        const character =req.body;
        const characterFound=myFavorites.find(fav=>fav.id === character.id);
        if(characterFound){throw Error('El personaje ya existe en favs')}
            myFavorites.push(character)
            return res.status(200).json(myFavorites);
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

const deleteFav=(req,res)=>{
    const {id} = req.params;
        myFavorites=myFavorites.filter((favorite)=>favorite.id !== +id);
    res.writeHead(200,{"Content-type":"application/json"})
    res.end(JSON.stringify(myFavorites))
}

module.exports={
    postFav,
    deleteFav,
};