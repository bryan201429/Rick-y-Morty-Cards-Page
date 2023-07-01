const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         // type:DataTypes.UUID,          //* Forma PRO para hacer ID
         // defaultValue:DataTypes.UUIDV4,
         type:DataTypes.INTEGER,
         allowNull:false,
         primaryKey:true,
         autoIncrement:true
      },
      email:{
         type:DataTypes.STRING,
         allowNull:false,
         isEmail:true,
      },
      password:{
         type:DataTypes.STRING,
         allowNull:false,
      },

   }, { timestamps: false });
};
