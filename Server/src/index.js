// const http= require('http');
// const getCharById = require("./controllers/getCharById");


// http.createServer((request, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*'); //! Permite el acceso a la data
    
//     if(request.url.includes('/rickandmorty/character')){
//         let id = request.url.split("/").at(-1)  //! El split divie en array los items separados por /, at -1 es el ultimo item
//         getCharById(response,id)
//     }
// }).listen(3001,'localhost')


//const express = require('express');
//const server = express();

//const router=require('./routes/index')
const server=require('./app');
const PORT = 3001;
const {conn}=require('./DB_connection');
// server.use(express.json());         //Middleware pasa la infomracion en formato json a js para trabajar 

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });

// server.use('/rickandmorty',router);   // Agregará la url a todas las rutas


server.listen(PORT, async() => {                   //!Se añadio async para que funcione con sequelize
   console.log('Server raised in port: ' + PORT);
   await conn.sync({force: true});
});