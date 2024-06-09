import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import QRCode from 'qrcode.react';
import './Delivery.css';
import './Delivery.css';


function Delivery() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      body: message,
      from: me
    }
    // Aquí puedes enviar el mensaje al servidor de Socket.IO
    setMessages([...messages, message])
    setMessage(''); // Limpiar el campo de mensaje después de enviar
  };

  useEffect(() => {

   return () => {
   }

  }, [])

  const receiveMessage = (message) => 
  setMessages((state) => [... state, message])


  return (
    <div className="message-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Escribe el mensaje que quieres enviar'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {
          messages.map((message, i) => (
            <li key={i}>
              {message.from}:{message.body}
              </li>

          ))
        }      
      </ul>
    </div>
  );
}
// hasta acá esta la funcionalidad de mensajería instantanea


const departments = [
  'Ventas',
  'Marketing',
  'Desarrollo',
  'Recursos humanos'
];

const DeliveryPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [packageId, setPackageId] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [recipient, setRecipient] = useState('');
  const [whatsappURL, setWhatsappURL] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (selectedDepartment) {
      console.log(`Buscando email para el departamento: ${selectedDepartment}`);
      fetchEmail();
    } else {
      setEmail('');
    }
  }, [selectedDepartment]);

  const handleDepartmentChange = (event) => {
    const department = event.target.value;
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
        console.error('Error al obtener el email:', data.error);
        setEmail('');
      }
    } catch (error) {
      console.error('Error al obtener el email:', error);
      setEmail('');
    }
  };

  const handleSendMessage = () => {
    // Aquí puedes enviar el mensaje manualmente usando la información disponible
    const packageId = document.getElementById('packageId').value;
    const arrivalTime = document.getElementById('arrivalTime').value;
    const recipient = document.getElementById('recipient').value;
    const packageIdValue = packageId;
    const arrivalTimeValue = arrivalTime;
    const recipientValue = recipient;
    const message = `ID del paquete: ${packageIdValue}, Hora de llegada: ${arrivalTimeValue}, Destinatario: ${recipientValue}`;
    const phoneNumber = '56949187570'; 
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    setWhatsappURL(whatsappURL);

    window.open(whatsappURL, '_blank');
    // Aquí puedes enviar el mensaje al servidor de Socket.IO

    // También puedes enviar el mensaje por correo electrónico u otras formas de comunicación
    sendEmail(message);
  };

  const sendEmail = async (message) => {
    try {
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
        <h1><center>Esta es la página de Entrega</center></h1>
        <form className="delivery-form">
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

          <button type="button" onClick={handleSendMessage}>Enviar</button>
          {messageSent && <p>¡Mensaje enviado correctamente!</p>}
        </form>
        {whatsappURL && (
          <div className="qr-code">
            <h2>Scan this QR Code to send the message via WhatsApp</h2>
            <QRCode value={whatsappURL} />
          </div>
        )}
      </div>
      <div className="message-center">
        <Delivery /> {/* Agregamos el componente de entrega aquí */}
      </div>
    </div>
  );
};

export default DeliveryPage;
