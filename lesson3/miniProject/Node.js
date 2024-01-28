const fs = require("fs");
const greeting = require("./greeting");
// let userName = "Айтигеник";
// console.log(greeting.greet(userName));

let users = fs.readFile("userNames.txt", "utf8", function (err, data) {
  let Users = data.split(",");
  for (let i = 0; i < Users.length; i++) {
    console.log(greeting.greet(Users[i]));
  }
});
