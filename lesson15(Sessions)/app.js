const express = require("express");
const app = express();
let counter;

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

app.get("/", function (request, response) {
  // request.session.counter = 0;
  if (request.session.counter) {
    response.send(`${request.session.counter++}`);
  } else {
    response.send(`${(request.session.counter = 1)}`);
  }
});

app.get("/setname", function (request, response) {
  request.session.name = "Айтигеник";
  response.send("Айтигеник сохранен в сессию");
});

app.get("/getname", function (request, response) {
  response.send(`Из сессии получено имя ${request.session.name}`);
});

app.get("/deletename", function (request, response) {
  delete request.session.name;
  response.send(`Имя удалено из сессии`);
});

app.get("/setname/:name", function (request, response) {
  request.session.name = request.params.name;
  response.send(`${request.params.name} сохранен в сессию`);
});

app.get("/killsession", function (request, response) {
  request.session.destroy((err) => {
    if (!err) {
      response.send("Сессия удалена");
    } else {
      console.log(err);
    }
  });
});
app.get("/reset", function (request, response) {
  delete request.session.counter;
  response.send(`Counter удалён из сесси`);
});

app.listen(3000, () => console.log("Сервер запущен..."));
