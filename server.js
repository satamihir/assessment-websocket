const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

// Store all connected clients
const clients = new Set();

server.on('connection', (websocket) => {
    // Add the new client to the set
    clients.add(websocket);

    console.log('Client connected');

    websocket.on('message', (message) => {
        console.log(`Received message from client: ${message}`);

        // Broadcast the message to all connected clients
        clients.forEach((client) => {
            if (client !== websocket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    websocket.on('close', () => {
        // Remove the client when the connection is closed
        clients.delete(websocket);
        console.log('Client disconnected');
    });
});

console.log('WebSocket server started at ws://localhost:8080');
