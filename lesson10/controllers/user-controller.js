const User = require("../models/user");

exports.registerPage = function (req, res) {
  res.render("register", {
    title: "Web-chat",

    user: req.session.user || null,
  });
};

exports.authorizationPage = function (req, res) {
  res.render("authorization", {
    title: "Web-chat",

    user: req.session.user || null,
  });
};

exports.addUser = async function (req, res) {
  const user = new User({
    login: req.body.login,
    password: req.body.password,
  });
  try {
    const userDocument = await User.findOne({ login: user.login });
    if (!userDocument) {
      await user.save();
      user.done();
      res.render("toAuthorizationFromReg", {
        title: "Successfull registration",
        login: req.body.login,
        user: null,
      });
    } else {
      console.log("this login is already taken");
      res.render("register", {
        errMess: "Пользователь с таким именем уже существует",
        errSelector: "login",
        title: "Регистрация",
        password: req.body.password,
        login: req.body.login,
        layout: "./layouts/main-layout",
        user: req.session.user || null,
      });
    }
  } catch (err) {
    if (err.errors.password) {
      console.log("Password validation error");
      res.render("register", {
        errSelector: "password",
        title: "Регистрация",
        password: req.body.password,
        login: req.body.login,
        layout: "./layouts/main-layout",
      });
    } else if (err.errors.login) {
      console.log("Login validation errors");
      res.render("register", {
        errSelector: "login",
        title: "Регистрация",
        password: req.body.password,
        login: req.body.login,
        layout: "./layouts/main-layout",
        user: req.session.user || null,
      });
    }
  }
};

exports.login = async function (req, res) {
  const user = await User.findOne({
    login: req.body.userName,
    password: req.body.password,
  });
  if (!user) {
    res.render("authorization", {
      errMessage: "Incorrect password or username",
      title: "Web-chat",
      user: req.session.user || null,
    });
  } else {
    req.session.user = { id: user.id, name: user.login };
    res.redirect("/");
  }
};
exports.logout = function (req, res) {
  delete req.session.user;
  res.redirect("/");
};
