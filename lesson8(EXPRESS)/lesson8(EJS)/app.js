const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const dateNow = new Date();
  let randomNumber = Math.floor(Math.random() * 6);
  let get_multiplication = function (...args) {
    let sum = 0;
    args.forEach((n) => {
      sum += n;
    });
    return sum;
  };

  res.render("index", {
    name: "Itgenik",
    title: "ejs-project",
    date: dateNow,
    mas: ["one", "two", "three"],
    rNumber: randomNumber,
    a: 5,
    b: 3,
    sum: get_multiplication,
  });
});

app.listen(3000);
