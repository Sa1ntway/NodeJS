const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const urlencodedParser = express.urlencoded({ extended: false });
const enterDate = new Date();

let counter = 0;

window.addEventListener("load", function () {
  setInterval(count, 1000);
  console.log(123);
});

function count() {
  counter++;
}

app.get("/", function (_, response) {
  count();
});
app.post("/", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(counter);
  response.send(console.log("You've been here for " + counter + "seconds"));
});

app.listen(3000, () => console.log("Сервер запущен..."));
