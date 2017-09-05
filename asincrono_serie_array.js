"use strict";

// Función que recibe un texto y lo escribe en la consola

function escribeTras2segundos(texto,callback){
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 500);
};

// Bucle asíncrono en serie
// LLamar a una función n veces en serie

function serie(arr,fn,callbackFinalizacion) {
    if (arr.length == 0){ // He terminado
        callbackFinalizacion();
        return;
    }
    
    fn('texto ' + arr.shift(), () => {
        serie(arr,fn,callbackFinalizacion);
    })
}

serie([1,2,3,4,5],escribeTras2segundos,() => {
    console.log('FIN');
});
