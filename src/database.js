const {Sequelize} = require("sequelize");



   const sequelize = new Sequelize("electron-db","root","Poliester8009",{
       host: "localhost",
       dialect: "mysql"

   })
   function getConnection(){
       return sequelize;
   }

   
   module.exports = {
       getConnection
   }
