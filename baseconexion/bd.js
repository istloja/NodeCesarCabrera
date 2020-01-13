const mysql = require("mysql");
const config = require("../config/db.config.js");
const conexion = mysql.createConnection({

  Host:config.host,
  User:config.user,
  Password:config.password,
  Database: config.dataBase,

});

conexion.connect(error=>{
  if(error) throw error;
  console.log("conexion esxitosa");
});
module.export = conexion;
