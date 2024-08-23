const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const urlencodedParser = express.urlencoded({ extended: false });
let date = "";
let dif;
const seconds = (date / 1000).toFixed(3);

let secret = "secret key";

app.use(cookieParser(secret));

let counter = 0;

function finalDate() {
  if (date != "") {
    let date = new Date().getMilliseconds();
  } else {
    let date = new Date().getMilliseconds();
  }
  return dif;
}

app.get("/", function (request, response) {
  if (!request.cookies.date && !request.cookies.counter) {
    response.cookie("date", new Date().getMilliseconds());
    response.cookie("counter", counter++);
  } else {
    console.log(request.cookies.date);
    dif = Math.abs(
      (new Date().getMilliseconds() - request.cookies.date) / 1000
    ).toFixed(3);
    response.cookie("date", new Date().getMilliseconds());
    console.log(request.cookies.counter);
    response.cookie("counter", counter++);
  }

  response.send(`<h1>Hello world</h1> ${counter} ${dif} `);
});

app.listen(3000, () => console.log("Сервер запущен..."));
