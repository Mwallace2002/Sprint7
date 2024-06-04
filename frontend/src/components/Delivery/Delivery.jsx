import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './Delivery.css';

const departments = [
  'Ventas',
  'Marketing',
  'Desarrollo',
  'Recursos humanos'
];

const Delivery = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (selectedDepartment) {
      console.log(`Fetching email for department: ${selectedDepartment}`);
      fetchEmail();
    } else {
      setEmail('');
    }
  }, [selectedDepartment]);

  const handleDepartmentChange = (event) => {
    const department = event.target.options[event.target.selectedIndex].value;
    console.log(`Departamento seleccionado: ${department}`);
    setSelectedDepartment(department);
  };

  const fetchEmail = async () => {
    try {
      const response = await fetch(`http://localhost:3050/api/get-email/${selectedDepartment}`);
      const data = await response.json();
      if (data.email) {
        setEmail(data.email);
      } else {
        console.error('Error fetching email:', data.error);
        setEmail('');
      }
    } catch (error) {
      console.error('Error fetching email:', error);
      setEmail('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const packageId = event.target.packageId.value;
    const arrivalTime = event.target.arrivalTime.value;
    const recipient = event.target.recipient.value;

    console.log(`ID del paquete: ${packageId}, Hora de llegada: ${arrivalTime}, Destinatario: ${recipient}`);
    console.log(`Email del departamento seleccionado: ${email}`);

    const message = `ID del paquete: ${packageId}\nHora de llegada: ${arrivalTime}\nDestinatario: ${recipient}\nEmail del departamento seleccionado: ${email}`;

    try {
      // Enviar mensaje al departamento seleccionado
      const response = await fetch('http://localhost:3050/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Información del paquete',
          text: message,
        }),
      });

      if (response.ok) {
        console.log('Mensaje enviado correctamente al departamento');
        setMessageSent(true);
      } else {
        console.error('Error al enviar el mensaje al departamento:', response.statusText);
      }
      
      // Enviar mensaje al correo electrónico fijo
      const fixedEmailResponse = await fetch('http://localhost:3050/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'prueba@gmail.com',
          subject: 'Información del paquete',
          text: message,
        }),
      });

      if (fixedEmailResponse.ok) {
        console.log('Mensaje enviado correctamente al correo electrónico fijo');
      } else {
        console.error('Error al enviar el mensaje al correo electrónico fijo:', fixedEmailResponse.statusText);
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="delivery-form-container">
        <h1><center>This is the Delivery Page</center></h1>
        <form className="delivery-form" onSubmit={handleSubmit}>
          <label htmlFor="department">Departamento:</label>
          <select id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
            <option value="">Seleccione un departamento</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          {selectedDepartment && <p>Departamento seleccionado: {selectedDepartment}</p>}
          {email && <p>Email asociado: {email}</p>}

          <label htmlFor="packageId">ID del paquete:</label>
          <input type="text" id="packageId" name="packageId" />

          <label htmlFor="arrivalTime">Hora de llegada:</label>
          <input type="time" id="arrivalTime" name="arrivalTime" />

          <label htmlFor="recipient">Destinatario:</label>
          <input type="text" id="recipient" name="recipient" />

          <button type="submit">Submit</button>
          {messageSent && <p>¡Mensaje enviado correctamente!</p>}
        </form>
      </div>
    </div>
  );
};

export default Delivery;
