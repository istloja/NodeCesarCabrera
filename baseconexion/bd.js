const mysql = require("mysql");
const config = require("../config/db.config.js");
const conexion = mysql.createConnection({

  host:'localhost',
  user:'chess94',
  password:'123456789cesar',
  dataBase:'mydb',

});

conexion.connect(error=>{
  if(error) throw error;
  console.log("conexion exitosa");
});
module.export = conexion;
