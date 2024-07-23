const express = require("express");
const app = express();

let secret = "secret key";

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
