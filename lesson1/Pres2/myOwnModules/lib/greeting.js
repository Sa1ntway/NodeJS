// console.log("Hello from greeting module");
// const date = require("../../dateLib/date");
module.exports.getMessage = (name, date) => {
  let hour = date.getHours();
  if (hour >= 18) {
    return "Добрый вечер, " + name;
  } else if (hour >= 12 && hour <= 17) {
    return "Добрый день, " + name;
  } else {
    return "Доброе утро, " + name;
  }
};
