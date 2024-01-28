const fs = require("fs");
let date = new Date();
let Now = date.getFullYear();
function calculateYears(userName, Year, Now) {
  let finalYear = Now - Year;
  console.log(userName + ": " + finalYear);
}

module.exports = { calculateYears };
