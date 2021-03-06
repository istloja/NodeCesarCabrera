const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res)=>{
  console.log (req);
  res.json({mensaje:"Hola Mundo"});
});

app.get("/hola/es", (req,res)=>{
  console.log (req);
  res.json({mensaje:"Hola Mundo 2"})
});

app.get("/hola/en", (req,res)=>{
  console.log (req);
  res.json({mensaje:"Hello World"})
});

require("./Servicios/rutas.js")(app);

app.listen(1111,()=>{
  console.log("servidor iniciado");
});
