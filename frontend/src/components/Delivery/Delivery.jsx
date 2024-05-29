



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
  const [packageId, setPackageId] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [recipient, setRecipient] = useState('');

  useEffect(() => {
    if (selectedDepartment) {
      fetch(`/api/get-email/${selectedDepartment}`)
        .then(response => response.json())
        .then(data => {
          if (data.email) {
            setEmail(data.email);
            console.log(`Email del departamento ${selectedDepartment}: ${data.email}`);
          } else {
            console.error('Error:', data.error);
          }
        })
        .catch(error => console.error('Error fetching email:', error));
    }
  }, [selectedDepartment]);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const packageIdValue = packageId;
    const arrivalTimeValue = arrivalTime;
    const recipientValue = recipient;

    console.log(`ID del paquete: ${packageIdValue}, Hora de llegada: ${arrivalTimeValue}, Destinatario: ${recipientValue}`);
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
          {email && <p>Email asociado: {email}</p>}
          <label htmlFor="packageId">ID del paquete:</label>
          <input type="text" id="packageId" name="packageId" value={packageId} onChange={(e) => setPackageId(e.target.value)} />

          <label htmlFor="arrivalTime">Hora de llegada:</label>
          <input type="time" id="arrivalTime" name="arrivalTime" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />

          <label htmlFor="recipient">Destinatario:</label>
          <input type="text" id="recipient" name="recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Delivery;
