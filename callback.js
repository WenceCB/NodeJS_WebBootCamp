"use strict";

// Función que recibe un texto y lo escribe en la consola

function escribeTras2segundos(texto,callback){
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}
escribeTras2segundos("texto1", () =>{ // y cuando termines ... 
// haces esto
escribeTras2segundos("texto2", () => { // y cuando termines ... 
  // haces esto  
    console.log("fin");
});
});
