const socket = io();
socket.on("message", function (data) {
  socket.send("Message received by user");
  console.log(data);
});
socket.on("testerEvent", function (data) {
  document.body.innerHTML = "";
  document.write(data.description);
});
socket.on("broadcast", function (data) {
  document.body.innerHTML = "";
  document.write(data.description);
});
