const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/my_zoo", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const Schema = mongoose.Schema;
const animalsScheme = new Schema({
  Kind: {
    type: String,
    maxlength: 15,
  },
  Food: {
    type: String,
  },
  Live: {
    type: String,
  },
  Description: {
    avgWeightKg: Number,
    hasTail: Boolean,
    character: String,
    // minlength: 20,
  },
});

const Animals = mongoose.model("Animals", animalsScheme);
Animals.create({
  Kind: "Elephant",
  Food: "grass",
  Live: "savanna",
  Description: {
    avgWeightKg: "4000",
    hasTail: true,
    character:
      "Elephants are highly sensitive and caring with well developed social behaviours, demonstrating empathy and concern for others within the family group and beyond.",
  },
})
  .then(function (doc) {
    console.log("Сохранен объект", doc);
  })
  .catch(function (err) {
    console.log(err);
  });
Animals.create({
  Kind: "Lion",
  Food: "meat",
  Live: "Africa",
  Description: {
    avgWeightKg: "200",
    hasTail: true,
    character:
      "Lions has always been considered as the symbol of power, bravery, courage, strength fearlessness and ferocity. These attributes contribute as a building block of his success as a leader.",
  },
})
  .then(function (doc) {
    console.log("Сохранен объект", doc);
  })
  .catch(function (err) {
    console.log(err);
  });
Animals.create({
  Kind: "Monkey",
  Food: "banana",
  Live: "Jungle",
  Description: {
    avgWeightKg: "20",
    hasTail: true,
    character:
      "Monkeys are intelligent and playful, as well as very emotional They can jump from one tree to another. They can travel a mile without coming on the ground. The monkeys are divided into two categories, first: an old monkey which is found in Asia, and the second: is the new monkey which is found in South Africa.",
  },
})
  .then(function (doc) {
    console.log("Сохранен объект", doc);
  })
  .catch(function (err) {
    console.log(err);
  });

Animals.find({})
  .then(function (doc) {
    console.log("Найдены объекты", doc);
  })
  .catch(function (err) {
    console.log(err);
  });

Animals.findOne({ Food: "grass" })
  .then(function (doc) {
    console.log("Найден объект", doc);
  })
  .catch(function (err) {
    console.log(err);
  });

const id = "6652f66ec0809d6e15e38f8e";
Animals.findById(id)
  .then(function (result) {
    console.log("Найден объект по id", result);
  })
  .catch(function (err) {
    console.log(err);
  });

Animals.deleteMany({ Description: { hasTail: true } })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

Animals.deleteOne({ Food: "banana" })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

Animals.findByIdAndDelete(id)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

Animals.updateMany({ Kind: "Lion" }, { Food: "meat" })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

Animals.findByIdAndUpdate(id, { Food: "grass", Live: "savanna" })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

Animals.findOneAndUpdate(
  { Kind: "Monkey", Live: "Jungle" },
  { Live: "Cage" },
  { new: true }
)
  .then(function (result) {
    mongoose.disconnect();
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

// animal
//   .save()
//   .then(function (doc) {
//     console.log("Сохранен объект", doc);
//   })
//   .catch(function (err) {
//     console.log(err);
//     // mongoose.disconnect();
//   });

// animal1
//   .save()
//   .then(function (doc) {
//     console.log("Сохранен объект", doc);
//   })
//   .catch(function (err) {
//     console.log(err);
//     // mongoose.disconnect();
//   });

// animal2
//   .save()
//   .then(function (doc) {
//     console.log("Сохранен объект", doc);
//   })
//   .catch(function (err) {
//     console.log(err);
//     mongoose.disconnect();
//   });
