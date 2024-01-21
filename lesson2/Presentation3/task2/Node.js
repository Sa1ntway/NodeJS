const fs = require("fs");
let fileContent;

fs.readFile("hello.txt", (err, data) => {
  if (err) throw err;
  fileContent = data;
  console.log(fileContent);
});
