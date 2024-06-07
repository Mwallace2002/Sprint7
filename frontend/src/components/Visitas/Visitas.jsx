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

  const [rutNoFrecuente, setRutNoFrecuente] = useState('');
  const [nombreNoFrecuente, setNombreNoFrecuente] = useState('');
  const [fechaNacimientoNoFrecuente, setFechaNacimientoNoFrecuente] = useState('');
  const [selectedDepartmentNoFrecuente, setSelectedDepartmentNoFrecuente] = useState('');

  const [patenteFrecuente, setPatenteFrecuente] = useState(''); // Estado para la patente de visita frecuente
  const [patenteNoFrecuente, setPatenteNoFrecuente] = useState(''); // Estado para la patente de visita no frecuente

  
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleDepartmentChangeNoFrecuente = (event) => {
    setSelectedDepartmentNoFrecuente(event.target.value);
  };

  const handleSubmitFrecuente = (event) => {
    event.preventDefault(); 

    const rutValue = rut;
    const nombreValue = nombre;
    const fechaNacimientoValue = fechaNacimiento;
    const VerificarRutValue = verificarRut;
    const department = selectedDepartment;
    const patenteValue = patenteFrecuente; // Obtener la patente frecuente ingresada por el usuario (nueva funcion)
    console.log(`Patente ingresada en visita frecuente: ${patenteValue}`);


    console.log(`VISITA FRECUENTE Departamento: ${department},Rut: ${rutValue}, Nombre y apellido: ${nombreValue}, Fecha de Nacimiento: ${fechaNacimientoValue}`);
    setVerificarRutMessage(`Rut de la frecuente: ${VerificarRutValue}`);
  };

  const handleSubmitNoFrecuente = (event) => {
    event.preventDefault(); 

    const rutNoFrecuenteValue = rutNoFrecuente;
    const nombreNoFrecuenteValue = nombreNoFrecuente;
    const fechaNacimientoNoFrecuenteValue = fechaNacimientoNoFrecuente;
    const selectedDepartmentNoFrecuenteValue = selectedDepartmentNoFrecuente;
    const patenteNoFrecuenteValue = patenteNoFrecuente; // Obtener la patente no frecuente ingresada por el usuario
    console.log(`Patente ingresada en visita no frecuente: ${patenteNoFrecuenteValue}`);

    console.log(`VISITA NO FRECUENTE Departamento: ${selectedDepartmentNoFrecuenteValue}, Rut: ${rutNoFrecuenteValue}, Nombre y apellido: ${nombreNoFrecuenteValue}, Fecha de Nacimiento: ${fechaNacimientoNoFrecuenteValue}`);
  };

  return (
    <div>
      <Navbar />
      <div className="visitas-form-container">
        <h1><center>Verificar si es visita frecuente</center></h1>
        <form className="visitas-form" onSubmit={handleSubmitFrecuente}>
          <label htmlFor="verificarRut">Rut de la visita:</label>
          <input type="text" id="verificarRut" name="verificarRut" value={verificarRut} onChange={(e) => setVerificarRut(e.target.value)} />
          <p>{verificarRutMessage}</p>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="visitas-form-container">
        <h1><center>Añadir visita frecuente</center></h1>
        <form className="visitas-form" onSubmit={handleSubmitFrecuente}>
        
       
       
       
        <label htmlFor="patenteFrecuente">Patente del vehículo:</label> 
        <input type="text" id="patenteFrecuente" name="patenteFrecuente" value={patenteFrecuente} onChange={(e) => setPatenteFrecuente(e.target.value)} />

          
          
          
          
          
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

      <div className="visitas-form-container">
        <h1><center>Añadir visita no frecuente</center></h1>
        <form className="visitas-form" onSubmit={handleSubmitNoFrecuente}>

        
        <label htmlFor="patenteNoFrecuente">Patente del vehículo:</label>
        <input type="text" id="patenteNoFrecuente" name="patenteNoFrecuente" value={patenteNoFrecuente} onChange={(e) => setPatenteNoFrecuente(e.target.value)} />
          
          
          
          <label htmlFor="departmentNoFrecuente">Departamento:</label>
          <select id="departmentNoFrecuente" value={selectedDepartmentNoFrecuente} onChange={handleDepartmentChangeNoFrecuente}>
            <option value="">Seleccione un departamento</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          <label htmlFor="rutNoFrecuente">Rut de la visita no frecuente:</label>
          <input type="text" id="rutNoFrecuente" name="rutNoFrecuente" value={rutNoFrecuente} onChange={(e) => setRutNoFrecuente(e.target.value)} />

          <label htmlFor="nombreNoFrecuente">Nombre y apellido:</label>
          <input type="text" id="nombreNoFrecuente" name="nombreNoFrecuente" value={nombreNoFrecuente} onChange={(e) => setNombreNoFrecuente(e.target.value)} />

          <label htmlFor="fechaNacimientoNoFrecuente">Fecha de Nacimiento:</label>
          <input type="date" id="fechaNacimientoNoFrecuente" name="fechaNacimientoNoFrecuente" value={fechaNacimientoNoFrecuente} onChange={(e) => setFechaNacimientoNoFrecuente(e.target.value)} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Visitas;
