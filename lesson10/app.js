var createError = require("http-errors");
const MongoStore = require("connect-mongo");
var express = require("express");
var path = require("path");
const fs = require("fs");
const session = require("express-session");
// var cookieParser = require('cookie-parser');
var logger = require("morgan");
const favicon = require("serve-favicon");
const config = require("./config");
// const indexRouter = require("./routes/index");
const homeRouter = require("./routes/home-router");
const cookieParser = require("cookie-parser");

const expressLayouts = require("express-ejs-layouts");
const userRouter = require("./routes/user-router");
const chatRouter = require("./routes/chat-router");

const logStream = fs.createWriteStream(path.join(__dirname, "logs.log"), {
  flags: "a",
});
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// let secret = "secret key";

const sessionMiddleware = session({
  secret: "ABC098",
  store: MongoStore.create({
    mongoUrl: config.get("dbUrl"),
  }),
});

app.use(sessionMiddleware);

// app.use(cookieParser(secret));

app.use(expressLayouts);
app.set("layout", "./layouts/main-layout");

app.use(logger(config.get("log_format"), { stream: logStream }));

app.get("/test", function (req, res) {
  res.end("test");
});

app.use("/", homeRouter);

app.use("/forbidden", function (req, res, next) {
  next(createError(403, "Ой! Вам сюда нельзя!"));
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use("/users", userRouter);

app.use("/chat", chatRouter);

// // catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "Страница не найдена. Извините"));
});

// // error handler
app.use(function (err, req, res, next) {
  //   // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //   // render the error page
  res.status(err.status || 500);
  if (err.status == 404) {
    res.render("error404", { layout: "./layouts/error-layout" });
  } else {
    res.render("error", { layout: "./layouts/error-layout" });
  }
});

app.use(function (req, res) {
  res.status(404);
  res.send("Страница не найдена. Извините");
});

module.exports = { app, sessionMiddleware };
