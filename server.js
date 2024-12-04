const WebSocket = require('ws'); // Importamos la librería 'ws'
const wss = new WebSocket.Server({ port: 8080 }); // Creamos el servidor WebSocket en el puerto 8080

let messageCount = 1; // Contador para los mensajes

wss.on('connection', ws => { // Evento 'connection' cuando un cliente se conecta
    console.log('Cliente conectado');

    // Evento para recibir el mensaje del cliente
    ws.on('message', message => {
        console.log('Mensaje recibido del cliente:', message.toString());
        ws.send('¡Hola desde el servidor WebSocket!');
    });

    // Enviar un mensaje al cliente cada 30 segundos (30000 ms)
    setInterval(() => {
        // Creamos el mensaje con el contador incrementado
        const message = `Mensaje ${messageCount} del servidor`;
        ws.send(message); // Enviamos el mensaje con el número correspondiente
        console.log(`Mensaje enviado al cliente: ${message}`);

        // Incrementamos el contador para el siguiente mensaje
        messageCount++;
    }, 30000);
});

console.log('Servidor WebSocket escuchando en el puerto 8080');


