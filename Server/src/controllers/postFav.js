const {Favorites} = require('../DB_connection');
const Favorite = require('../models/Favorite');

module.exports = async (req,res)=>{

    try {
        const {id,name,origin,status,image,species,gender}=req.body;

        if(!id||!name||!origin||!status||!image||!species||!gender){
            return res.status(401).send("Faltan datos")

        }
        await Favorite.findOrCreate({where:{name,origin,status,image,species,gender}})

        const allFavorites = await Favorite.findAll();          //Busca todos los favoritos y los retorna
        return res.status(200).json(allFavorites);              

    } catch (error) {
        return res.status(500).send(error.messaage)
    }
}