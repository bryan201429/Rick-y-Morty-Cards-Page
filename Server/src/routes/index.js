const{login} = require('../controllers/login');
const {getCharacterByID} = require('../controllers/getCharById');
const {postFav,deleteFav} = require('../controllers/handleFavorites');

const router=require('express').Router(); 

router.get('/character/:id',(req,res)=>{
    getCharacterByID(req,res);
})

router.get('/login',login); //sin poner req,res, se pasa directamente estos a lafuncion login

router.post('/fav',(req,res)=>{
    postFav(req,res);
})

router.delete('/fav/:id',(req,res)=>{
    deleteFav(req,res);
})

module.exports=router;