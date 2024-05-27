import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './Delivery.css';

const Delivery = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); 

        const packageId = event.target.packageId.value;
        const arrivalTime = event.target.arrivalTime.value;
        const recipient = event.target.recipient.value;

        console.log(`ID del paquete: ${packageId}, Hora de llegada: ${arrivalTime}, Destinatario: ${recipient}`);
    };

    return (
        <div>
            <Navbar />
            <div className="delivery-form-container">
                <h1><center>This is the Delivery Page</center></h1>
                <form className="delivery-form" onSubmit={handleSubmit}>
                    <label htmlFor="packageId">ID del paquete:</label>
                    <input type="text" id="packageId" name="packageId" />

                    <label htmlFor="arrivalTime">Hora de llegada:</label>
                    <input type="time" id="arrivalTime" name="arrivalTime" />

                    <label htmlFor="recipient">Destinatario:</label>
                    <input type="text" id="recipient" name="recipient" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Delivery;
