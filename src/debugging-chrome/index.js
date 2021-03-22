function repetir(nombre, veces) {
    /**
     * imprimimos nombre del numero de vss
     * @author Cristian Gutierrez
     * @version 0.1.0
     * @param {string} nombre
     * @param {number} veces
     * @return {none}
    */
   // Creamos un ciclo for
   for (let index = 1; index < veces; index++) {
       //la variable index se va incrementando en 1
       let element = document.createElement("p");
       element.innerText = nombre;
       document.body.appendChild(element);
   }

}

const nom = prompt("Escribe tu nombre");
const vcs = parseInt(prompt("Escribe las vcs que lo mostraras"));
repetir(nom, vcs);