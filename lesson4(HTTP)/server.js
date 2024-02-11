const http = require("http");
http
  .createServer(function (request, response) {
    response.setHeader("StudentId", 1);
    response.setHeader("Content-type", "text/html; charset=utf-8");
    response.setHeader("Country", "Belarus");
    response.setHeader("Age", "14");
    response.setHeader("Name", "Vladislav");

    // response.write("<h2>Привет ученик Айтигенио!</h2>");
    response.write(request.url);
    response.write(request.method);
    response.write(JSON.stringify(request.headers));
    response.end();
  })
  .listen(3000);
