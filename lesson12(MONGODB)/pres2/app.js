const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScheme = new Schema({
  name: String,
  age: Number,
});
const User = mongoose.model("User", userScheme);
const user = new User({
  name: "Andrey",
  age: 25,
});
mongoose.connect("mongodb://localhost:27017/usersdb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

user
  .save()
  .then(function (doc) {
    console.log("Сохранен объект", doc);
    mongoose.disconnect();
  })
  .catch(function (err) {
    console.log(err);
    mongoose.disconnect();
  });
