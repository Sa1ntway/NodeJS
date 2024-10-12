// const express = require("express");
// const router = express.Router();
// const homeController = require("../controllers/home-controller.js");

// router.get("/", function (req, res, nex) {});

// router.get("/", homeController.index);

// module.exports = router;

exports.index = function (req, res) {
  res.render("index", {
    title: "Веб-чат",
    date: new Date().toDateString(),
    layout: "./layouts/main-layout",
    user: req.session.user || null,
  });
};

exports.about = function (req, res) {
  res.render("about", {
    title: "Веб-чат",
    layout: "./layouts/main-layout",
    user: req.session.user || null,
  });
};

exports.register = function (req, res) {
  res.render("reg", {
    title: "Register",
    layout: "./layouts/main-layout",
    user: req.session.user || null,
  });
};
exports.authorization = function (req, res) {
  res.render("login", {
    title: "Authorization",
    layout: "./layouts/main-layout",
    user: req.session.user || null,
  });
};
