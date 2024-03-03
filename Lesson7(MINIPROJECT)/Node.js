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
          let data404 = fs.readFileSync("404.html");
          response.statusCode = 404;
          response.write(data404);
        }
      });
    } else if (request.url.endsWith(".css")) {
      addClientFile(response, request.url, "text/css");
    } else if (request.url.endsWith(".js")) {
      addClientFile(response, request.url, "text/javascript");
    } else if (request.url.endsWith(".jpg")) {
      addClientFile(response, request.url, "img/jpg");
    } else if (request.url.endsWith(".png")) {
      addClientFile(response, request.url, "img/png");
    } else if (request.url.endsWith(".jpeg")) {
      addClientFile(response, request.url, "img/jpeg");
    }
  })
  .listen(8888);

function addClientFile(response, url, header) {
  let urlFile = url.slice(1);

  fs.readFile(urlFile, (err, data) => {
    if (!err) {
      response.setHeader("Content-type", header);
      response.statusCode = 200;
      response.write(data);
      response.end();
    } else {
      let data404 = fs.readFileSync("404.html");
      response.statusCode = 404;
      response.write(data404);
      response.end();
    }
  });
}
