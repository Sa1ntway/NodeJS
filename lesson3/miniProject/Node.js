const fs = require("fs");
const greeting = require("./greeting");
const calculateYears = require("./calculateYears");
// let userName = "Айтигеник";
// console.log(greeting.greet(userName));

let users = fs.readFile("userNames.txt", "utf8", function (err, data) {
  let Users = data.split(",").slice(0, 4);
  let Years = data.split(",").slice(4);
  let objInfo = {};
  for (let i = 0; i < Users.length; i++) {
    objInfo[Users[i]] = Years[i];
  }
  console.log(objInfo);
  for (let i = 0; i < Users.length; i++) {
    fs.appendFileSync("hello.txt", greeting.greet(Users[i]));
  }
  if (err) throw err;
});
