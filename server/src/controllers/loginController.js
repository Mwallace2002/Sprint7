const connection = require('../models/db');
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
    const { username, password } = req.body;

    const consult = 'SELECT * FROM login WHERE username = ? AND password = ?';
    
    try {
        connection.query(consult, [username, password], (err, result) => {
            if (err) {
                console.error('Database query error:', err);
                return res.status(500).send({ error: 'Database query error' });
            }

            if (result && result.length > 0) {
                const token = jwt.sign({ username }, "Stack", {
                    expiresIn: '1m'
                });
                res.send({ token });
            } else {
                console.log('wrong user');
                res.send({ message: 'wrong user' });
            }
        });
    } catch (e) {
        console.error('Unexpected error:', e);
        res.status(500).send({ error: 'Unexpected error' });
    }
};
