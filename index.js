// Se importan los datos del archivo app.js

const app = require('./app');

// Se crea el servidor con http o https.

const http = require('http');
const server = http.createServer(app);

// Se concecta con el front-end

server.listen(3001, () => {
  console.log('El servidor está corriendo en el puerto 3003');
});