//-------------Establishing connection to server---------
const chat = (http) => {
    const io = require('socket.io')(http, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: true
        },
    });

    io.on('connection', (socket) => {
        // console.log(socket.id);
        socket.on('send-message', (message) => {
            // console.log("message from client", message);
            socket.broadcast.emit('receive-message', message);
        })
    });
};

module.exports = chat;