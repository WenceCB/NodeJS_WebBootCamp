"use strict";

// Crear una función como constructor de objetos

function Fruta(nombre){

    // this será el objeto que se va a crear
    this.nombre = nombre;
    // Funcion de flecha, es lo mismo pero quitando function
    this.setNombre = (valor) => {
        this.nombre = valor;
    }
}

// Crear un objeto con el constructor

const limon = new Fruta ('limon');
limon.setNombre = 'naranja';

console.log(limon.nombre);

// Serializar un JSON

const objetoSerialiazdo = JSON.stringify(limon);

console.log(objetoSerialiazdo);