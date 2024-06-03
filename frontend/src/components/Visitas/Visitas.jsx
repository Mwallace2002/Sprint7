import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './Visitas.css';

const departments = [
  'Ventas',
  'Marketing',
  'Desarrollo',
  'Recursos humanos'
];

const Visitas = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [rut, setRut] = useState('');
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [verificarRut, setVerificarRut] = useState('');
  const [verificarRutMessage, setVerificarRutMessage] = useState('');

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const rutValue = rut;
    const nombreValue = nombre;
    const fechaNacimientoValue = fechaNacimiento;
    const VerificarRutValue = verificarRut;

    console.log(`Rut de la visita: ${rutValue}, Nombre y apellido: ${nombreValue}, Fecha de Nacimiento: ${fechaNacimientoValue}`);
    setVerificarRutMessage(`Rut de la frecuente: ${VerificarRutValue}`);
  };

  return (
    <div>
      <Navbar />
      <div className="visitas-form-container">
        <h1><center>Verificar si es visita frecuente</center></h1>
        <form className="visitas-form" onSubmit={handleSubmit}>
          <label htmlFor="verificarRut">Rut de la visita:</label>
          <input type="text" id="verificarRut" name="verificarRut" value={verificarRut} onChange={(e) => setVerificarRut(e.target.value)} />
          <p>{verificarRutMessage}</p>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="visitas-form-container">
        <h1><center>Añadir visita frecuente</center></h1>
        <form className="visitas-form" onSubmit={handleSubmit}>
          <label htmlFor="department">Departamento:</label>
          <select id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
            <option value="">Seleccione un departamento</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          <label htmlFor="rut">Rut de la visita:</label>
          <input type="text" id="rut" name="rut" value={rut} onChange={(e) => setRut(e.target.value)} />

          <label htmlFor="nombre">Nombre y apellido:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />

          <button type="submit">Submit</button>
        </form>
      </div>

      
    </div>
  );
};

export default Visitas;
