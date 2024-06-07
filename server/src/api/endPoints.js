const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'agbdlcid', 
  database: 'PP420'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

// Rutas existentes
const loginController = require('../controllers/loginController');
const pingController = require('../controllers/pingController');
const deliveryController = require('../controllers/deliveryController');

router.post('/login', loginController.login);
router.get('/ping', pingController.ping);

// Ruta para obtener el correo electrónico del departamento
router.get('/api/get-email/:department', (req, res) => {
  const { department } = req.params;
  const query = 'SELECT mail FROM contactos WHERE departamento = ?';

  console.log(`Fetching email for department: ${department}`); 
  console.debug(`SQL Query CONTROL 4: ${query}`); 

  db.query(query, [department], (err, results) => {
    if (err) {
      console.error('Error fetching email:', err);
      res.status(500).json({ error: 'Error fetching email' });
      return;
    }

    console.log('Email results:', results); 

    if (results.length > 0) {
      res.json({ email: results[0].mail });
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  });
});

module.exports = router;
