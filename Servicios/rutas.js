module.exports = app =>{
  const libros = require("../Controller/controlador.js");
  app.post("/obtenerTodos",libros.ObtenerTodos);
  app.post("/crearNuevoLibro",libros.crearNuevoLibro);
  app.post("/editarLibro",libros.editarLibro);
};
