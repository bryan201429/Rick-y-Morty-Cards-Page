const app=require('../src/app');
const session=require('supertest');
const request=session(app);
const login =require('../src/utils/users')

const character={
    id:512,
    name:'Gorila',
    species:'Human',
    gender:'Female',
    status:'Alive',
    origin:{
        name:'Earth 666'
    },
    image:'image.jpg'
};

describe('Test de RUTAS',()=>{
    describe('GET /rickandmorty/character/:id',()=>{
        it("Responde con status: 200", async ()=>{
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image',async()=>{
            // const obj={
            //     id:500,
            //     name:'xd',
            //     species:'x2',
            //     origin:{name:'earth',},
            //     image:'image.jpg',
            //     gender:'Female',
            //     status:'Alive'
            // }
            
            // const response=await agent.get('/rickandmorty/character/1');
            // for(const prop in obj){
            //     expect(response.body).toHaveProperty(prop);
            // }

            const response=await request.get('/rickandmorty/character/1');
            const props =['id','name','species','gender','status','origin','image']
            props.forEach(prop=>{
                expect(response.body).toHaveProperty(prop);
            })
        })
        it('Si hay un error responde con status: 500',async ()=>{
            const response= await request.get('/rickandmorty/character/164d1')
            expect(response.statusCode).toBe(500);
         })
    })
    describe('GET /rickandmorty/login',()=>{
        it('Responde obj con prop access true si info es válida', async()=>{
            const response = await request.get('/rickandmorty/login?email=bryan201429@gmail.com&password=201429');
            const access={access:true};
            expect(response.body).toEqual(access);
        })
        it('Responde obj con prop access false si info NO es válida', async()=>{
            const response = await request.get('/rickandmorty/login?email=bryan201429@gmail.com&password=2014xdxd');
            const access={access:false};
            expect(response.body).toEqual(access);
        })
    })

    describe('POST /rickandmorty/fav',()=>{
        it('Se debe devolver arreglo',async ()=>{

            const response = await request.post('/rickandmorty/fav').send(character)

            expect(response.body).toContainEqual(character) //toContain: busca dentro de un array, toEqual:busca igualdad de objs
        })

        it('Agrega personajes favs sin eliminar a los previos',async()=>{
            character.id = 1955;
            character.name ='bryan'
            const response = await request.post('/rickandmorty/fav').send(character)    //Se envió por segunda vez pero con datos modificados
            expect(response.body.length).toBe(2)
        })

    })

    describe('DELETE /rickandmorty/fav/:id',()=>{
        it("si esl id no existe devuelve los elementos previos",async ()=>{
            const response=await request.delete('/rickandmorty/fav/2')
            console.log(response.body.length).toBe(2)       //response.body trae todo el obj de los personajes
        })
        it("si esl id si existe",async ()=>{
            const response=await request.delete('/rickandmorty/fav/1923')
            console.log(response.body.length).toBe(1)       //response.body trae todo el obj de los personajes
        })
        
    })
})

