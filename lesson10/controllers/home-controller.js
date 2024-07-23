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
  });
};

exports.about = function (req, res) {
  res.render("about", {
    title: "Веб-чат",
    layout: "./layouts/main-layout",
  });
};
