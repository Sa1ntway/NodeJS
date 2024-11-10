const exp = require("constants");
const express = require("express");
const http = require("http");

const app = express();

const server = http.Server(app).listen(3000);

const io = require("socket.io")(server);

app.use(express.static("public"));
app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});
let count = 0;
console.log(2);
io.on("connection", function (socket) {
  console.log(1);
  console.log("User connected");
  socket.on("testerEvent", function (data) {
    document.write(data.description);
    socket.emit("testerEvent", { description: "Ой, кто-то нажал эту кнопку!" });
  });
  socket.on("click", function (data) {
    console.log(count);
    count++;
    io.sockets.emit("broadcast", {
      description: count + "раз нажали эту кнопку",
    });
  });
  socket.on("disconnect", function () {
    console.log("User disconnected");
  });
});
