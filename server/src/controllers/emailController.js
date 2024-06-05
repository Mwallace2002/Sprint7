// src/controllers/emailController.js

const getEmail = (req, res) => {
    const department = req.params.department;
    // Simula el correo electrónico asociado al departamento
    let email;
    switch (department) {
        case 'Ventas':
            email = 'ventas@example.com';
            break;
        case 'Marketing':
            email = 'marketing@example.com';
            break;
        case 'Desarrollo':
            email = 'desarrollo@example.com';
            break;
        case 'Recursos humanos':
            email = 'recursoshumanos@example.com';
            break;
        default:
            email = ''; // O cualquier valor por defecto
    }
    res.json({ email });
};

module.exports = {
    getEmail
};
