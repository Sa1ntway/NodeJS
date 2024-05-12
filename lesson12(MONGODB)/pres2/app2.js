const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const animalsScheme = new Schema({
  Kind: String,
  Food: String,
  Live: String,
});
const Animals = mongoose.model("Animal", animalsScheme);
const animals = new Animals({
  Kind: "elephant",
  Food: "dog food",
  Live: "worldwide",
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
