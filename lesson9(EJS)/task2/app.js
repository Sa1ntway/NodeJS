const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index", {
    // films: ["Голос улиц", "Человек-паук", "1+1", "Плохой коп хороший коп"],
    films: [],
  });
});

app.listen(8888);
