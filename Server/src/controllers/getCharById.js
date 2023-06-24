// const axios = require('axios');
// const URL = 'https://rickandmortyapi.com/api/character/'

// const getCharById = function(res,id){
//     axios(URL+id)
//     .then(response=>response.data)        //Accedemos a la data
//     .then((data)=>{
//         const character ={
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin?.name,  //Si tiene origen
//             image: data.image,
//             status: data.status,
//         }
//         res.writeHead(200,{"Content-type":"application/json"})
//         res.end(JSON.stringify(character))
//     })

//     .catch(error=>{
//         res.writeHead(500,{"Content-type":"application/json"})
//         res.end(error.message)
//     })
// }

// module.exports = getCharById;
 
const url="https://rickandmortyapi.com/api/character";
const axios =require('axios');
const { response } = require('express');


const  getCharacterByID= async (req,res)=>{
    try {
        const {id}= req.params;
        const {data} = await axios(`${url}/${id}`)
        

            if(!data.name) throw new Error(`ID: ${id} Not found`);
            
                const character={
                    id:data.id,
                    name: data.name,
                    gender: data.gender,
                    species: data.species,
                    origin: data.origin?.name,  //Si tiene origen
                    image: data.image,
                    status: data.status,
                }
            res.status(200).json(character);
            

            //Si no encuentra el personaje
            // res.writeHead(404,{'Content:type':'text/plain'})
            // return res.end('Not found')                 //Return para que corte la ejecucion de codigo
        

    }catch (error) {
        error.message.includes('ID')
        ?res.status(404).send(error.message)
        :res.status(500).send(error.message)
    }
    
    // const {id}= req.params;
    // console.log('Id entrante:',id)
    // console.log('Haciendo getCharacterById')
    // axios(`${url}/${id}`)
    // .then(response=>response.data)
    // .then((data) => {
    //     console.log(data)
    //     if(data.name){console.log('Si hay name')
    //     const character={
            
    //         id:data.id,
    //         name: data.name,
    //         gender: data.gender,
    //         species: data.species,
    //         origin: data.origin?.name,  //Si tiene origen
    //         image: data.image,
    //         status: data.status,
    //     }
    //     console.log(character)
    //     // res.writeHead(200,{'Content:type':'application/json'})
    //     // res.end(JSON.stringify(character))
    //     return res.status(200).json(character);
    //     }

    //     //Si no encuentra el personaje
    //     console.log('No se encontró el personaje')
    //     res.writeHead(404,{'Content:type':'text/plain'})
    //     return res.end('Not found')                 //Return para que corte la ejecucion de codigo
    // })
    // .catch(error=>{
    //     console.log('Hubo error')
    //     res.writeHead(500,{"Content-type":"application/json"})
    //     return res.end(error.message)
    // })

}

module.exports = {
    getCharacterByID,};