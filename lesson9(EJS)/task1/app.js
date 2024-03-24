const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index", {
    title: "ejs-project",
  });
});
app.listen(8888);
