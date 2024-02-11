const fs = require("fs");
const http = require("http");
http
  .createServer(function (request, response) {
    const filePath = request.url.substring(1);
    fs.readFile(filePath, function (error, data) {
      if (error) {
        response.statusCode = 404;
        response.end("Page not found");
      } else {
        response.end(data);
      }
    });
  })
  .listen(3000);
