const fs = require("fs");
fs.rename("hello.txt", "async operation.txt", function (error) {
  if (error) {
    console.log(error);
  }
});

fs.renameSync("hello.txt", "sync operation.txt");
