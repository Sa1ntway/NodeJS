const mongoose = require("mongoose");
const { required } = require("nconf");
const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
  },
});
userSchema.methods.done = function () {
  const greeting = `User ${this.login} has been successfully registered`;
  console.log(greeting);
};

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/webchatdb");
  console.log("Connected successfully to server");

  const User = mongoose.model("User", userSchema);
  const user = new User({
    login: "itgenik1",
    password: "qwerty",
  });

  const userDocument = await User.findOne({ login: user.login });

  if (!userDocument) {
    await user.save();
    user.done();
  } else {
    // console.log(2);
    console.log("This login is already taken");
  }

  const findUser = await User.findOne({ login: "itgenik" });
  console.log(findUser);
}
