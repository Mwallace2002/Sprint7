import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import './Vehiculos.css';


const Vehiculos = () => {
  const [placa, setPlaca] = useState('');
  const [numeroEstacionamiento, setNumeroEstacionamiento] = useState('');
  const [horaEntrada, setHoraEntrada] = useState('');
  const [tiempoEstanciaHoras, setTiempoEstanciaHoras] = useState('');
  const [tiempoEstanciaMinutos, setTiempoEstanciaMinutos] = useState('');
  const [tiempoEstanciaSegundos, setTiempoEstanciaSegundos] = useState('');
  const [tiempoNotificacion, setTiempoNotificacion] = useState(''); 
  const [mensaje, setMensaje] = useState('');
  const [tiempoHastaNotificacion, setTiempoHastaNotificacion] = useState(null);
  const [infoVehiculo, setInfoVehiculo] = useState({ placa: '', estacionamiento: '' });
  
  const [ocupacionEstacionamientos, setOcupacionEstacionamientos] = useState(Array(5).fill('libre')); 




  const handleSubmit = (event) => {
    event.preventDefault();

    const tiempoEstancia = `${tiempoEstanciaHoras}:${tiempoEstanciaMinutos}:${tiempoEstanciaSegundos}`;

    const vehiculoData = {
      placa,
      numeroEstacionamiento,
      horaEntrada,
      tiempoEstancia
    };
    console.log('Patente registrada:', placa); // Imprimir la patente registrada en el console log
    console.log('Datos del vehículo:', vehiculoData);

    const nuevoEstadoOcupacion = [...ocupacionEstacionamientos];
    nuevoEstadoOcupacion[numeroEstacionamiento - 1] = 'ocupado';    //funcionalidad nueva para guardar el estacionamiento ocupado
    setOcupacionEstacionamientos(nuevoEstadoOcupacion);

    const [entradaHoras, entradaMinutos] = horaEntrada.split(':').map(Number);
    const tiempoEstanciaTotalSegundos = 
      (parseInt(tiempoEstanciaHoras, 10) || 0) * 3600 + 
      (parseInt(tiempoEstanciaMinutos, 10) || 0) * 60 + 
      (parseInt(tiempoEstanciaSegundos, 10) || 0);
    const notificacionSegundos = (parseInt(tiempoNotificacion, 10) || 0) * 60;

    const tiempoEntradaSegundos = entradaHoras * 3600 + entradaMinutos * 60;
    const tiempoNotificacionEnSegundos = tiempoEstanciaTotalSegundos - notificacionSegundos;
    const tiempoHastaNotificacionEnSegundos = tiempoNotificacionEnSegundos;

    console.log('Tiempo total de estancia en segundos:', tiempoEstanciaTotalSegundos);
    console.log('Segundos hasta notificación:', tiempoHastaNotificacionEnSegundos);

    setTiempoHastaNotificacion(tiempoHastaNotificacionEnSegundos);
    setInfoVehiculo({ placa, estacionamiento: numeroEstacionamiento }); // Guardar la placa y estacionamiento para usar en la notificación

    // Simula guardar los datos y reinicia el formulario
    setPlaca('');
    setNumeroEstacionamiento('');
    setHoraEntrada('');
    setTiempoEstanciaHoras('');
    setTiempoEstanciaMinutos('');
    setTiempoEstanciaSegundos('');
    setTiempoNotificacion('');
  };

  useEffect(() => {
    let timer;

    if (tiempoHastaNotificacion > 0) {
      timer = setInterval(() => {
        setTiempoHastaNotificacion(prevTiempo => {
          const nuevoTiempo = prevTiempo - 1;
          console.log('Tiempo restante hasta la notificación:', nuevoTiempo);
          if (nuevoTiempo <= 0) {
            const mensajeNotificacion = infoVehiculo.placa
              ? `El tiempo de estancia del vehículo ${infoVehiculo.placa} está a punto de terminar`
              : `El tiempo de estancia del estacionamiento ${infoVehiculo.estacionamiento} está a punto de terminar`;
            setMensaje(mensajeNotificacion);
            clearInterval(timer);
          }
          return nuevoTiempo;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [tiempoHastaNotificacion, infoVehiculo]);

  return (
    <div>
      <Navbar />
      <div className="vehiculos-form-container">
        <h1><center>Registro de Vehículos</center></h1>
        <form className="vehiculos-form" onSubmit={handleSubmit}>
          <label htmlFor="placa">Placa del Vehículo:</label>
          <input type="text" id="placa" name="placa" value={placa} onChange={(e) => setPlaca(e.target.value)} />

          <label htmlFor="numeroEstacionamiento">Número de Estacionamiento:</label>
          <select id="numeroEstacionamiento" name="numeroEstacionamiento" value={numeroEstacionamiento} onChange={(e) => setNumeroEstacionamiento(e.target.value)}>
            <option value="">Seleccionar estacionamiento</option>
            {[1, 2, 3, 4, 5, 'N/A'].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          
          <div className="ocupacion-estacionamientos">
            {[1, 2, 3, 4, 5].map(numero => (
              <div key={numero} className={`cuadro-ocupacion ${ocupacionEstacionamientos[numero - 1]}`}>
                <span>{numero}</span>
                <span>{ocupacionEstacionamientos[numero - 1] === 'ocupado' ? 'Ocupado' : 'Desocupado'}</span>
              </div>
            ))}
          </div>

               
               
               
               
                <label htmlFor="horaEntrada">Hora de Entrada:</label>
                <input type="time" id="horaEntrada" name="horaEntrada" value={horaEntrada} onChange={(e) => setHoraEntrada(e.target.value)} />

                <label htmlFor="tiempoEstanciaHoras">Horas de Estancia:</label>
                <select id="tiempoEstanciaHoras" name="tiempoEstanciaHoras" value={tiempoEstanciaHoras} onChange={(e) => setTiempoEstanciaHoras(e.target.value)}>
                {[...Array(24).keys()].map(hour => (
                    <option key={hour} value={hour}>{hour}</option>
                ))}
                </select>
                <label htmlFor="tiempoEstanciaMinutos">Minutos de Estancia:</label>
                <select id="tiempoEstanciaMinutos" name="tiempoEstanciaMinutos" value={tiempoEstanciaMinutos} onChange={(e) => setTiempoEstanciaMinutos(e.target.value)}>
                {[...Array(60).keys()].map(minute => (
                    <option key={minute} value={minute}>{minute}</option>
                ))}
                </select>
                <label htmlFor="tiempoNotificacion">Tiempo de Notificación (minutos antes):</label>
                <input type="number" id="tiempoNotificacion" name="tiempoNotificacion" value={tiempoNotificacion} onChange={(e) => setTiempoNotificacion(e.target.value)} />

                <button type="submit">Registrar</button>
            </form>
            {mensaje && <p className="mensaje">{mensaje}</p>}
            
            </div>
    </div>
  );
};

export default Vehiculos;
