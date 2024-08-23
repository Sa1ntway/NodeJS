const express = require("express");
const app = express();

const session = require("express-session");

app.use(
  session({
    secret: "you secret key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 5,
    },
  })
);

app.get("/setname", function (request, response) {
  request.session.name = "Айтигеник";
  response.send("Айтигеник сохранен в сессию");
});

app.get("/getname", function (request, response) {
  response.send(`Из сессии получено имя ${request.session.name}`);
});

app.get("/setname/:name", function (request, response) {
  request.session.name = request.params.name;
  response.send(`${request.params.name} сохранен в сессию`);
});

app.listen(3000, () => console.log("Сервер запущен..."));
