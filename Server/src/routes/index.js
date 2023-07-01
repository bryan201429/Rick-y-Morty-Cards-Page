// const{login} = require('../controllers/login');
// const {postFav,deleteFav} = require('../controllers/handleFavorites');

const {getCharacterByID} = require('../controllers/getCharById');
const login = require('../controllers/login');
const postUser=require('../controllers/postUser');
const postFav=require('../controllers/postFav');
const deleteFav=require('../controllers/deleteFav');

const router=require('express').Router(); 


router.get('/login',login);//sin poner req,res, se pasa directamente estos a lafuncion login
router.post('/login',postUser);
router.post('/fav',postFav);
router.delete('/fav/:id',deleteFav)
router.get('/character/:id',getCharacterByID)



// router.post('/fav',(req,res)=>{
//     postFav(req,res);
// })
// router.delete('/fav/:id',(req,res)=>{
//     deleteFav(req,res);
// })

// router.get('/character/:id',(req,res)=>{
//     getCharacterByID(req,res);
// })







module.exports=router;