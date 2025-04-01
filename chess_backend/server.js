const express = require('express');
const { Server } = require("socket.io");
const http = require('http');

const app = express(); // initialize express
const server = http.createServer(app);

// set port to value received from environment variable or 8080 if null
const port = process.env.PORT || 8080 

// upgrade http server to websocket server
const io = new Server(server, {
  cors: '*', // allow connection from any origin
});

const rooms = new Map();

// Function to generate a 4-digit random integer string
const generateRoomId = () => String(Math.floor(1000 + Math.random() * 9000));

// io.connection
io.on('connection', (socket) => {
  console.log(socket.id, 'connected');

  socket.on('move', (data) => {
    socket.to(data.room).emit('move', data.move);
  });

  socket.on('username', (username) => {
    console.log(username);  
    socket.data.username = username;
  });

  socket.on('createRoom', async (callback) => { 
    const roomId = generateRoomId(); // <- Generate a 4-digit room ID
    await socket.join(roomId);
   
    rooms.set(roomId, {
      roomId,
      players: [{ id: socket.id, username: socket.data?.username }]
    });

    callback(roomId); 
  });

  socket.on('joinRoom', async (args, callback) => {
    const room = rooms.get(args.roomId);
    let error, message;
  
    if (!room) {
      error = true;
      message = 'room does not exist';
    } else if (room.length <= 0) {
      error = true;
      message = 'room is empty';
    } else if (room.length >= 2) {
      error = true;
      message = 'room is full';
    }

    if (error) {
      if (callback) {
        callback({
          error,
          message
        });
      }
      return;
    }

    await socket.join(args.roomId);

    const roomUpdate = {
      ...room,
      players: [
        ...room.players,
        { id: socket.id, username: socket.data?.username },
      ],
    };

    rooms.set(args.roomId, roomUpdate);

    callback(roomUpdate);
    socket.to(args.roomId).emit('opponentJoined', roomUpdate);
  });

  socket.on('move', (data) => {
    socket.to(data.room).emit('move', data.move);
  });

  socket.on("disconnect", () => {
    const gameRooms = Array.from(rooms.values());

    gameRooms.forEach((room) => {
      const userInRoom = room.players.find((player) => player.id === socket.id);

      if (userInRoom) {
        if (room.players.length < 2) {
          rooms.delete(room.roomId);
          return;
        }

        socket.to(room.roomId).emit("playerDisconnected", userInRoom);
      }
    });
  });

  socket.on("closeRoom", async (data) => {
    socket.to(data.roomId).emit("closeRoom", data);

    const clientSockets = await io.in(data.roomId).fetchSockets();

    clientSockets.forEach((s) => {
      s.leave(data.roomId);
    });

    rooms.delete(data.roomId);
  });
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
