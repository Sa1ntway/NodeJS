const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index", {
    book: "Война глазами крестьянина",
    t: "Никакой войны",
  });
});

app.listen(8888);
