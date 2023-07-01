const {Favorites}=require('../DB_connection');
const Favorite = require('../models/Favorite');

module.exports=async(req,res)=>{
    try {
        const {id}=req.params;
        await Favorite.destroy({where:{id}})            //! ELIMINA EL FAVORITO QUE COINCIDE CON EL ID

        const allFavorites = await Favorite.findAll();
        return res.json(allFavorites);

    } catch (error) {
        res.status(500).send(error.message);
    }
}