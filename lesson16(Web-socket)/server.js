const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3000 });

server.on("connection", (ws) => {
  ws.on("message", (message) => {
    const parsedMessage = message.toString();
    console.log(parsedMessage);
    if (parsedMessage === "exit") {
      ws.close();
    } else {
      server.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(parsedMessage);
        }
      });
    }
  });

  ws.send("Welcome to ITGenio");
});
