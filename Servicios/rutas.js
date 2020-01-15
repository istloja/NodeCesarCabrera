module.exports = app => {
  const libros = require("../Controller/controlador.js");
  app.post("/ObtenerTodos",libros.ObtenerTodos);
};
