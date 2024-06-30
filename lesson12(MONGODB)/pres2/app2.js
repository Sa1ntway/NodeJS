const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const animalsScheme = new Schema({
  Kind: String,
  Food: String,
  Live: String,
});
const Animals = mongoose.model("Animals", animalsScheme);
const animal = new Animals({
  Kind: "Elephant",
  Food: "grass",
  Live: "worldwide",
});
const animal1 = new Animals({
  Kind: "Lion",
  Food: "meat",
  Live: "Africa",
});
const animal2 = new Animals({
  Kind: "Monkey",
  Food: "banana",
  Live: "Jungle",
});
mongoose.connect("mongodb://localhost:27017/my_zoo", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

animal
  .save()
  .then(function (doc) {
    console.log("Сохранен объект", doc);
  })
  .catch(function (err) {
    console.log(err);
    mongoose.disconnect();
  });

animal1
  .save()
  .then(function (doc) {
    console.log("Сохранен объект", doc);
  })
  .catch(function (err) {
    console.log(err);
    mongoose.disconnect();
  });

animal2
  .save()
  .then(function (doc) {
    console.log("Сохранен объект", doc);
  })
  .catch(function (err) {
    console.log(err);
    mongoose.disconnect();
  });
