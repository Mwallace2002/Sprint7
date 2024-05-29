// contactcontroller.js

const connection = require('../models/db');

const getEmailByDepartment = (departamento, callback) => {
    const query = 'SELECT mail FROM contactos WHERE departamento = ?';
    connection.query(query, [departamento], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (results.length > 0) {
            return callback(null, results[0].mail);
        } else {
            // Si no se encuentra el departamento, devolver un error o null
            return callback(new Error('Departamento no encontrado'), null);
        }
    });
};

module.exports = {
    getEmailByDepartment
};
