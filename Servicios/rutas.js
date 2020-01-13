module.exports = app => {
  const libros = require("../model/libro.js");
  app.post("ObtenerTodos",libros.obtenerTodos);
};
