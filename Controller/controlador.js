const modelo = require ("../model/libro.js");
exports.ObtenerTodos = (req, res) => {
  modelo.get((err, data)=>{
      if (error)
        res.json({mensaje:"No se pudo obtener los datos"});
      else (res).send(data);
    });
};
