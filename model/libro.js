const mysql = require ("../baseconexion/bd.js");
const libro = function(Libros){
  this.id_libros = Libros.id_libros;
  this.codigo_libro = Libros.codigo_libro;
  this.nombre_libro = Libros.nombre_libro;
  this.prestado = Libros.prestado;
  this.categoria_id_categoria = Libros.categoria_id_categoria;
  this.autor_id_autor = Libros.autor_id_autor;
  this.editorial_id_editorial = Libros.editorial_id_editorial;
};

libro.ObtenerTodos = result =>{
  mysql.query('Select * from libros',(err,res)=>{
    if (err){
        console.log (err,'error consulta');
        result (null,err);
        return
      }
      console.log(res);
      result(null,res);
    }
  );
};

libro.crearNuevoLibro = (nuevoLibro, result) =>{
  mysql.query("INSERT INTO libros SET ?", nuevoLibro, (error,res)=>{
    if (error) {
      console.log(error,'error al crear Libro');
      result(null,error);
      return;
    } else {
      result(null,res);
    }
  });
};

libro.editarLibro = (codigo_libro,editarLibro,result)=>{
  mysql.query("UPDATE libros SET nombre_libro=?, prestado=?, categoria_id_categoria=?,editorial_id_editorial WHERE codigo_libro=?",
  [editarLibro.nombre_libro,editarLibro.prestado,editarLibro.categoria_id_categoria,editarLibro.editorial_id_editorial,codigo_lib],(error,res)=>{

    if (error) {
      console.log(error,' error al crear Libro');
      result(null,error);
      return;
    } else {
      if(res.affectedRows==0){
        result({kind:"not found"},null)
      }else{
         result(null,res)
       }
    }
  });
};
module.exports=libro;
