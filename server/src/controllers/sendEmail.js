// src/controllers/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { to, subject, text } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'Gmail', // Puedes cambiarlo a otro servicio de correo si es necesario
        auth: {
            user: 'kikefaijo2013@gmail.com', // Cambia esto por tu correo
            pass: '#Kikefaij0', // Cambia esto por tu contraseña
        },
    });

    let mailOptions = {
        from: 'kikefaijo2013@gmail.com', // Cambia esto por tu correo
        to: to,
        subject: subject,
        text: text,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
};

module.exports = { sendEmail };
