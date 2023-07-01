// const users =require('../utils/users')

// const login = (req,res)=>{
//     const {email,password}=req.query;
//     const userFound=users.find((user)=>user.email===email && user.password===password)
//     console.log(userFound);
// return userFound
// ? res.status(200).json({access:true})
// : res.status(404).json({access:false}) 
// }

// module.exports={
// login};

const {User}=require("../DB_connection");

module.exports = async(req,res)=>{
    try {
        const {email,password}=req.query;
        if(!email||!password) return res.status(400).send("Faltan datos")

        const user= await User.findOne({where:{email}})
        if(!user) return res.status(404).send("Usuario no encontrado")

        return user.password===password ? res.json({access:true}):res.status(403).send(error.message);

    } catch (error) {
        res.status(500).json(error.message);
    }
}