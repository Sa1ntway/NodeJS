const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

let secret = "secret key";

app.use(cookieParser(secret));

window.onload = function () {
  let Name = prompt("Your name");
  let Gmail = prompt("Your gmail");

  $(window).bind("load", function () {
    document.cookie = "Name=name; Gmail=gmail";

    app.get("/set-cookie", (req, res) => {
      res.cookie("Name", "name", {
        domain: "example.com",
        path: "/example/",
        maxAge: 1000 * 60 * 60 * 24 * 365,
        secure: false,
        httpOnly: true,
      });
      res.cookie("Gmail", "gmail", {
        domain: "example.com",
        path: "/example/",
        maxAge: 1000 * 60 * 60 * 24 * 365,
        secure: false,
        httpOnly: true,
      });
    });
  });
};

$("button").click(function () {
  window.location.reload();
  alert(document.cookie);
});
