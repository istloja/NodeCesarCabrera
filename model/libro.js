const myql = require ("../baseconexion/bd.js");
const libro = function(Libros){
  this.id_libros = Libros.id_libros;
  this.codigo_libro = Libros.codigo_libro;
  this.nombre_libro = Libros.nombre_libro;
  this.prestado = Libros.prestado;
  this.categoria_id_categoria = Libros.categoria_id_categoria;
  this.autor_id_autor = Libros.autor_id_autor;
  this.editorial_id_editorial = Libros.editorial_id_editorial;
};

libro.obtenerTodos = result =>{
  myql.query('Select * from Libros',(err,res)=>{
    if (error){
        console.log (error,'error consulta');
        result (-1,error);
        return
      }
      console.log(res);
      result(1,res);
    }
  );
};
module.exports=libro;
