const fs = require("fs");
let readText;

fs.writeFileSync("files/file1.txt", "text1");
fs.writeFileSync("files/file2.txt", "text2");
fs.writeFileSync("files/file3.txt", "text3");

// fs.readFile("files/file1.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   readText = data;
//   //   console.log(readText);
// });
// fs.readFile("files/file2.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   readText = data;
//   //   console.log(readText);
// });
// fs.readFile("files/file3.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   readText = data;
//   //   console.log(readText);
// });

let files = fs.readdirSync("./files");
console.log(files);

for (let i = 0; i < files.length; i++) {
  let content = fs.readFileSync("./files/" + files[i], "utf8");
  console.log(content);
}
