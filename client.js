const WebSocket = require('ws');

const NUM_CLIENTS = 3;  // Set the number of clients you want to simulate

for (let i = 1; i <= NUM_CLIENTS; i++) {
    const ws = new WebSocket(`ws://localhost:8080`);

    ws.on('open', () => {
        console.log(`Client ${i} connected to the server`);

        // Send messages to the server
        setInterval(() => {
            const message = `Hello from client ${i}, message ${Math.random()}`;
            console.log(`Client ${i} sending message to server: ${message}`);
            ws.send(message);
        }, 2000);
    });

    ws.on('message', (message) => {
        console.log(`Client ${i} received message from server: ${message}`);
    });

    ws.on('close', () => {
        console.log(`Client ${i} connection closed`);
    });
}
