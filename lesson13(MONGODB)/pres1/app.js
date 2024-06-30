const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/usersdb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const Schema = mongoose.Schema;

const userScheme = new Schema({
  name: String,
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  company: {
    name: {
      String,
      default: "NoName",
    },
    line_of_work: String,
    date: Date,
  },
});

const User = mongoose.model("User", userScheme);
const user1 = new User();
const user2 = new User({ name: "Tom" });
const user3 = new User({ age: 34 });
const user4 = new User({ name: "Fred", age: "25" });

user4
  .save()
  .then(function (doc) {
    console.log("Сохранен объект", doc);
  })
  .catch(function (err) {
    console.log(err);
    mongoose.disconnect();
  });
// user2.save(function (err) {
//   mongoose.disconnect();
//   if (err) return console.log(err);
//   console.log("Сохранен объект user", user2);
// });
// user3.save(function (err) {
//   mongoose.disconnect();
//   if (err) return console.log(err);
//   console.log("Сохранен объект user", user3);
// });
// user4.save(function (err) {
//   mongoose.disconnect();
//   if (err) return console.log(err);
//   console.log("Сохранен объект user", user4);
// });
