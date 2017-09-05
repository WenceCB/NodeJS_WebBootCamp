"use strict";

// Función que recibe un texto y lo escribe en la consola

function escribeTras2segundos(texto,callback){
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

// Bucle asíncrono en serie
// LLamar a una función n veces en serie

function serie(n,fn,callbackFinalizacion){
    if (n == 0){ // He terminado
        callbackFinalizacion();
        return;
    }
    n = n - 1; // Voy restando hasta que llegue a 0
    fn('texto' + n, () => {
        serie(n,fn,callbackFinalizacion);
    })
}

serie(5,escribeTras2segundos,() => {
    console.log('FIN');
})
