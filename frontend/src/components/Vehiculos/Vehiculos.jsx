import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './Vehiculos.css'; // Asegúrate de que el CSS se importe correctamente

const Vehiculos = () => {
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = () => {
        const phoneNumber = '56949187570'; // Replace with the recipient's phone number
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="vehiculos-container">
            <Navbar />
            <div className="message-container">
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Ingrese su mensaje"
                    className="message-input"
                />
                <button onClick={handleSubmit} className="submit-button">
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default Vehiculos;
