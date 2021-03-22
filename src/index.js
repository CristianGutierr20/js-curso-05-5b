//Cristian Gutierrez Rivas 5 5B

const saludar = (nombre) => {
    console.log("Creando etiqueta H1, en el HTML!")

    // comentario de una sola linea.
    // El codigo comentado no lo lee el interprete de JS.

    /*
       comentario de varias lineas.
       Uso basico del DOCUMENTO OBJECT MODEL (DOM)
       permite a JS modificar el HTML.
    */
   const h1 = document.createElement("h1");
   h1.innerText = "hola, ${nombre}" ;

   document.body.append(h1);
}

const user = "Juancho";

saludar(user);