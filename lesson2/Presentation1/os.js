const os = require("os");
const fs = require("fs");
const path = require("path");
let info =
  "Операционная система: " +
  os.platform() +
  "\nАрхитектура процессора: " +
  os.arch() +
  "\nСвободная память: " +
  os.freemem() +
  "\nВсего пямяти: " +
  os.totalmem() +
  "\nДомашняя директория: " +
  os.homedir() +
  "\nВключен: " +
  os.uptime();
// console.log("Операционная система: " + os.platform());
// console.log("Архитектура процессора: " + os.arch());
// console.log("Свободная память: " + os.freemem());
// console.log("Всего пямяти: " + os.totalmem());
// console.log("Домашняя директория: " + os.homedir());
// console.log("Включен: " + os.uptime(), "секунд");

fs.writeFile("osInfo.txt", info, (err) => {
  if (err) {
    throw err;
  }
  console.log("Файл создан");
});

fs.readFile("osInfo.txt", (err, content) => {
  if (err) {
    throw err;
  }
  const data = Buffer.from(content);
  console.log("Content: " + data.toString());
});

fs.appendFile("osInfo.txt", "\nHello NodeJS", (err) => {
  if (err) {
    throw err;
  }
});
