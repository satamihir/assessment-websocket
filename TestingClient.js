const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to the server Testing Client');

    // Send messages to the server
    setInterval(() => {
        const message = `Hello from client ${Math.random()}`;
        console.log(`Sending message to server Testing Client: ${message}`);
        ws.send(message);
    }, 2000);
});

ws.on('message', (message) => {
    console.log(`Received message from server: ${message}`);
});

ws.on('close', () => {
    console.log('Connection closed');
});
