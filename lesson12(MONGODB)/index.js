const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
MongoClient.connect(function (err, client) {
  if (err) {
    return console.log(err);
  }

  const db = client.db("Library");
  const collection = db.collection("Books");

  collection.find({ author: "Стивен Кинг" }).toArray(function (err, result) {
    console.log(result);
    client.close();
  });
});
