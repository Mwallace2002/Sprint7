const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController');
// const { getEmail } = require('../controllers/contactcontroller'); // Importa el nuevo controlador

router.get('/ping', ping);
router.post('/login', login);
// router.get('/get-email/:departamento', getEmail); // Define la nueva ruta

module.exports = router;
