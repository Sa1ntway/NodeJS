const express = require("express");
const app = express();
app.get("/", function (request, response) {
  response.send("<h2>Привет, express</h2>");
});
app.use(function (request, response, next) {
  console.log("Запрос выполнен");
  next();
});
app.use("/work", function (request, response, next) {
  response.send("<p>Я изучаю конвейр обработки запросов</p>");
});
app.use(function (request, response, next) {
  let date = new Date();
  let time = date.getTime();
  console.log(date, time);
  next();
});
app.use("/datetime", function (request, response) {
  let date = new Date();
  let time = date.getTime();
  response.send("<h1>" + date + ", " + time + "</h1>");
});
app.get("/about", function (request, response) {
  response.send("<p>Это мой первый проект на Express!</p>");
});
app.get("/info/about-me", function (request, response) {
  response.send("<p>Мне 14 лет и я живу в Минске</p>");
});
app.get("/info/about-itgenio", function (reqest, response) {
  response.send("<p>Мы работаем с 2016 года!</p>");
});

app.listen(3000);
