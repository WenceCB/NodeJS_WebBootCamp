// Cargar la libreria http

const http = require('http');

// Definir un servidor

const server = http.createServer(function(request,response){
    // Cada petición que reciba el servidor ejecuta esta función

    response.writeHead(200,{'Content-Type':'text/html'})
    response.end('Wake up, <b>Neo ....<b>\n');

});

// Arrancar el servidor ( si es un puerto menor de 1024 se necesita permiso administrador)

server.listen(1337,'127.0.0.1');
console.log('Servidor arrancado en http://localhost:1337');