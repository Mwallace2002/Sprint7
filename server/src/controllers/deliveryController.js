const connection = require('../models/db');

module.exports.getEmailByDepartment = (req, res) => {
    const { department } = req.params;

    const query = 'SELECT mail FROM contactos WHERE departamento = ?';

    try {
        connection.query(query, [department], (err, result) => {
            if (err) {
                console.error('Database query error:', err);
                return res.status(500).send({ error: 'Database query error' });
            }

            if (result && result.length > 0) {
                res.send({ email: result[0].mail });
            } else {
                res.send({ error: 'Department not found' });
            }
        });
    } catch (e) {
        console.error('Unexpected error:', e);
        res.status(500).send({ error: 'Unexpected error' });
    }
};
