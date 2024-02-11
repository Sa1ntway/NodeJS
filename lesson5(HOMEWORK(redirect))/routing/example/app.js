const http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    const FilePath = request.url.substring(1);
    fs.readfile("public/" + filePath, function (error, data) {
      if (error) {
        fs.readfile("public/404.html", function (error, data) {
          if (error) throw error;
          response.statusCode = 404;
          response.end(data);
        });
      } else {
        response.statusCode = 200;
        response.end(data);
      }
    });
  })
  .listen(3000);
