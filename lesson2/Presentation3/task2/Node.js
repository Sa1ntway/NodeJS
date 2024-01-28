const fs = require("fs");
let fileContent;

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  fileContent = data;
  console.log(fileContent);
});
