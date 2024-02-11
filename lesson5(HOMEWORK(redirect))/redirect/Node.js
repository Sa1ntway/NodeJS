const url = require("url");
const http = require("http");
http
  .createServer(function (request, response) {
    response.setHeader("Content-type", "text/html; charset=utf-8");

    if (request.url === "/") {
      response.statusCode = 302;
      response.setHeader("Location", "/hobby");
      response.setHeader("Location", "/hobby/dancing");
      response.setHeader("Location", "/hobby/writing-music");
      response.setHeader("Location", "/hobby/gaming");
      response.setHeader("Location", "/hobby/programming");
    } else if (request.url == "/hobby") {
      response.write(
        "These are my hobbies: dancing, writing music, gaming, programming"
      );
    } else if (request.url == "/hobby/dancing") {
      response.write("I do dance for 5 years");
    } else if (request.url == "/hobby/writing-music") {
      response.write("I write music for 4 years");
    } else if (request.url == "/hobby/gaming") {
      response.write("I do gaming for 6 years");
    } else if (request.url == "/hobby/programming") {
      response.write("I do programming for 3rd year");
    } else {
      response.statusCode = 404;
      response.write("Page not found");
    }

    response.end();
  })
  .listen(3000);
