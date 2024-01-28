const fs = require("fs");
let fileContent;

fs.appendFileSync("hello.txt", "Конец файла", function (err) {
  if (err) throw err;
});

fs.readFileSync("hello.txt", "utf8", function (err) {
  if (err) throw err;
});

// fs.unlinkSync("hello.txt");
// console.log("hello.txt is deleted");
