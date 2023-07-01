const {User}=require('../DB_connection');

module.exports = async(req,res)=>{

    try {
        
        const {email,password} = req.body;
        console.log("creando user",email," pass: ",password)
        if(!email||!password) return res.status(400).send("Faltan datos");

        const user=await User.findOrCreate({where: {email, password}})
    } catch (error) {
        res.status(500).json(error.message);
    }
}

