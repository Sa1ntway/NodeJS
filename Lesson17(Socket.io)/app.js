const express = require("express");
const http = require("http");
const { deserialize } = require("v8");

const app = express();

const server = http.Server(app).listen(3000);
const io = require("socket.io")(server);

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
let count = 0;
io.on("connection", function (socket) {
  console.log("User connected");
  count++;
  console.log(count);
  io.sockets.emit("broadcast", { description: count + "clients connected!" });
  setTimeout(function () {
    socket.emit("testerEvent", { description: "A custom event!" });
  }, 5000);
  // console.log(1);
  socket.on("testerEvent", function (data) {
    document.write(data.description);
  });
  socket.on("disconnect", function () {
    console.log("User disconnected");
    count--;
    console.log(count);
    io.sockets.emit("broadcast", {
      description: count + " clients connected!",
    });
  });
});
