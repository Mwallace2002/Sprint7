// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

// Middleware para analizar el cuerpo de las solicitudes JSON y URL encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usa las rutas definidas en routes/index.js
app.use('/', routes);

// Configuración del puerto y puesta en marcha del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
