const express = require("express");
const app = express();
const Parser = require("cookie-parser");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let secret = "secret key";

app.set("view engine", "ejs");

app.use(cookieParser(secret));

app.get("/set-cookie", (req, res) => {
  res.cookie("token", "12345ABCD", {
    domain: "example.com",
    path: "/example/",
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: false,
    httpOnly: true,
  });
});

app.post("/", urlencodedParser, (req, res) => {
  if (!request.body) return response.sendStatus(400);
  res.send(`${request.body.name} - ${request.body.email}`);
});
