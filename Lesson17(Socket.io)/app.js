const express = require("express");
const http = require("http");

const app = express();

const server = http.Server(app).listen(3000);
const io = require("socket.io")(server);

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  console.log("User connected");
  setTimeout(function () {
    socket.send("Sent a message 4 seconds after connection!");
  }, 4000);
  socket.on("message", function (data) {
    console.log(dataz);
  });
  socket.on("disconnect", function () {
    console.log("User disconnected");
  });
});
