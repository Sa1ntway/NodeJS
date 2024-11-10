const socket = io();

socket.on("message", function (data) {
  socket.send("Message received by user");
  console.log(data);
});

socket.on("testerEvent", function (data) {
  console.log("testerEvent");
  // document.body.innerHTML = "";
  socket.send(description);
  document.write(data.description);
});
socket.on("broadcast", function (data) {
  console.log(data.description);
  // document.write(data.description);
});
console.log(123);
const button = document.addEventListener("click", function () {
  socket.emit("click", { description: "Ой, кто-то нажал эту кнопку!" });
});
