const modelo = require ("../model/libro.js");

exports.ObtenerTodos = (req, res) => {
  modelo.ObtenerTodos((err, data)=>{
      if (err){

        res.json({mensaje:"No se pudo obtener los datos"});
      }
      else {
        (res).send(data);
      }
    });
  };

exports.crearNuevoLibro = (req,res) => {
    const nuevoLibro = new modelo({
      id_libros: req.body.id_libros,
      codigo_libro: req.body.codigo_libro,
      nombre_libro: req.body.nombre_libro,
      prestado: req.body.prestado,
      categoria_id_categoria: req.body.categoria_id_categoria,
      autor_id_autor: req.body.autor_id_autor,
      editorial_id_editorial: req.body.editorial_id_editorial,
    });

    modelo.crearNuevoLibro(nuevoLibro,(error,data) => {
      if (error){
        res.status(500).send({mensaje:"Error al crear nuevo Libro"});
      }else{
        res.send(data);
        }
    });
  }




exports.editarLibro = (req, res)=> {

    const codigoLibro = req.body.codigo;
    const editarLibro = new modelo (req,body);

    modelo.editarLibro(codigoLibro,editarLibro, (error, data)=>{

      if(eror){

        if (error.kind=='not found'){
          res.status(400).send({mensaje: "No se encontro el usuario"});
        }else{
          res.status(500).send({mensaje: "No se encontro el usuario"});
        }

      }

        if (error){
          res.json({mensaje:"No se pudo obtener los datos"});
        }else (res).send(data);
      });


    };
