const socket = io();
socket.on("message", function (data) {
  socket.send("Message received by user");
  document.write(data);
});
