import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

io.on('connection', (socket) => {
  console.log(socket.id); // Aquí usamos `socket` en lugar de `Socket`

  socket.on('message', (body) => {
    console.log(body);
    socket.broadcast.emit('message', {
      body: data.body,
      from: socket.id.slice(6)
    });
  });
});

server.listen(4000, () => {
  console.log('server on port', 4000);
});
