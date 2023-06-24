const express = require('express');
const server = express();
const router=require('./routes/index')

server.use(express.json());         //Middleware pasa la infomracion en formato json a js para trabajar 

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use('/rickandmorty',router);   // Agregará la url a todas las rutas


module.exports=server;