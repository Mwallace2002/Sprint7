const connection = require('../models/db'); // Importa el módulo de conexión a la base de datos

module.exports.pingdeptos = (req, res) => {
    const consult = 'SELECT * FROM contactos';

    try {
        connection.query(consult, (err, results) => {
            if (err) {
                console.error('Error al ejecutar la consulta:', err);
                return res.status(500).json({ error: 'Error al ejecutar la consulta' });
            }
            console.log(results);
            res.json(results);
        });
    } catch (e) {
        console.error('Error inesperado:', e);
        res.status(500).json({ error: 'Error inesperado' });
    }
};
