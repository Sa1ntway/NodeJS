const http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    if (request.url.endsWith(".html")) {
      addClientFile(request.url, "text/html", response);
    } else if (request.url.endsWith(".css")) {
      addClientFile(request.url, "text/css", response);
    } else if (request.url.endsWith(".js")) {
      addClientFile(request.url, "text/javascript", response);
    } else if (request.url.endsWith(".jpg")) {
      addClientFile(request.url, "image/jpg", response);
    } else if (request.url.endsWith(".png")) {
      addClientFile(request.url, "image/png", response);
    } else {
    }
  })
  .listen(8888);
function addClientFile(url, header, response, err) {
  let fileUrl = url.slice(1);
  //   let header =
  fs.readFile(fileUrl, (err, data) => {
    response.setHeader("Content-type", header);
    response.statusCode = 200;
    response.write(data);
    response.end();
    if (err) {
      fs.readFile("404.html", (err, data) => {
        response.setHeader("Content-type", "text/html");
        response.statusCode = 404;
        response.write(data);
        response.end();
      });
    }
  });
}
