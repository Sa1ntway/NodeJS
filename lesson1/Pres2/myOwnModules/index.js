const userName = require("../userName/userName");
const greeting = require("./lib/greeting");
const date = require("../dateLib/date");

console.log(`Дата запроса: ${date.currentDate}`);

console.log(greeting.getMessage(userName.userName, date.currentDate));
