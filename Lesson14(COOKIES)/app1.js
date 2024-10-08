const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const urlencodedParser = express.urlencoded({ extended: false });

let secret = "secret key";

app.use(cookieParser(secret));

app.get("/", function (_, response) {
  response.sendFile(__dirname + "/index.html");
});
app.post("/", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.send(`${request.body.userName} - ${request.body.userEmail}`);
});

app.listen(3000, () => console.log("Сервер запущен..."));
