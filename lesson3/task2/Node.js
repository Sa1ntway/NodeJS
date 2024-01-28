// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "Hi";
// emitter.on(eventName, function (data) {
//   console.log("Привет, NodeJS");
// });

// emitter.emit(eventName);

// =========================================

// task2.1

// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "Hi";
// emitter.on(eventName, function (data) {
//   console.log(data);
// });

// emitter.emit(eventName, "Влад");

// =========================================

// task2.2

// let arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "Hi";
// emitter.on(eventName, function (data) {
//   console.log(data);
// });
// for (let i = 0; i < arr.length; i++) {
//   emitter.emit(eventName, arr[i]);
// }

// =========================================

// task3, 3.1

// const Emitter = require("events");
// let handlerClick = new Emitter();
// let eventName = "click";
// handlerClick.on(eventName, function (object) {
//   console.log(object.event);
// });

// // handlerClick.emit(eventName, 'Вызов события клик');
// handlerClick.emit(eventName, { event: "click" });
