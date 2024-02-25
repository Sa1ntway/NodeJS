let http = require("http");
let fs = require("fs");

http
  .createServer(function (request, response) {
    let htmlFile = request.url.slice(1);
    if (request.url.endsWith(".html")) {
      fs.readFile(htmlFile, (err, data) => {
        if (!err) {
          fs.readFile("menu.html", "utf-8", (err, elem) => {
            if (err) throw err;
            data = data.toString().replace(/\{\{menu}\}/g, elem);
            response.setHeader("Content-type", "text/html");
            response.statusCode = 200;
            response.write(data);
            response.end();
          });
        } else {
          response.statusCode = 404;
          response.write("Page not found");
        }
      });
    } else if (request.url.endsWith(".css")) {
      let cssFile = request.url.slice(1);
      fs.readFile(cssFile, (err, data) => {
        if (!err) {
          response.setHeader("Content-type", "text/css");
          response.statusCode = 200;
          response.write(data);
        } else {
          response.statusCode = 404;
          response.write("Page not found");
        }
        response.end();
      });
    } else if (request.url.endsWith(".js")) {
      let jsFile = request.url.slice(1);
      fs.readFile(jsFile, (err, data) => {
        if (!err) {
          response.setHeader("Content-type", "text/javascript");
          response.statusCode = 200;
          response.write(data);
          response.end();
        } else {
          response.statusCode = 404;
          response.write("Page not found");
        }
      });
    } else if (request.url.endsWith(".jpg")) {
      let imgFile = request.url.slice(1);
      fs.readFile(imgFile, (err, data) => {
        if (!err) {
          response.setHeader("Content-type", "img/jpg");
          response.statusCode = 200;
          response.write(data);
          response.end();
        }
      });
    } else if (request.url.endsWith(".png")) {
      let pngFile = request.url.slice(1);
      fs.readFile(pngFile, (err, data) => {
        if (!err) {
          response.setHeader("Content-type", "img/png");
          response.statusCode = 200;
          response.write(data);
          response.end();
        }
      });
    }
  })
  .listen(8888);
