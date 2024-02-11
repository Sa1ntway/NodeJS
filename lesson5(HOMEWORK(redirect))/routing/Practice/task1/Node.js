const fs = require("fs");
const http = require("http");
http
  .createServer(function (request, response) {
    const filePath = request.url.substr(1);
    fs.readFile(filePath, function (error, data) {
      if (error) {
        fs.readFile("index.html", function (error, data) {
          if (error) throw error;
          response.statusCode = 404;
          response.end(data);
        });
      }
    });
  })
  .listen(3000);
