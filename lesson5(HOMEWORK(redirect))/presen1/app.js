"use strict";
let http = require("http");
http
  .createServer(function (request, response) {
    response.setHeader("Content-type", "text/html; charset=utf-8");
    if (request.url == "/home" || request.url === "/") {
      response.write("Home");
      response.statusCode = 200;
    } else if (request.url == "/page1") {
      response.write("page1");
      response.statusCode = 200;
    } else if (request.url == "/page2") {
      response.write("page2");
      response.statusCode = 200;
    } else if (request.url == "/page3") {
      response.write("page3");
      response.statusCode = 200;
    } else {
      response.write("Page not found");
      response.statusCode = 404;
    }
  })
  .listen(3000);
