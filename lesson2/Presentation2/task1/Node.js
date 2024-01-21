const fs = require("fs");
let fileContent = fs.readFileSync("text.txt", "utf-8");

let text2Content = fs.readFileSync("text2.txt", "utf-8");
fs.appendFileSync("text.txt", text2Content.toString());

console.log(fileContent);
