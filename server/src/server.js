// src/server.js

const express = require('express');
const cors = require('cors');
const app = express();
const { getEmail } = require('./controllers/emailcontroller');
const { sendEmail } = require('./controllers/sendEmail'); // no tengo aun creado SENDEMAIL

app.use(express.json());
app.use(cors());


app.get('/api/get-email/:department', getEmail);
app.post('/api/send-email', sendEmail);

const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});
