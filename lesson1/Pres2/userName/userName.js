const os = require("os");
let userName = os.userInfo().username;
module.exports.userName = userName;
