const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient("mongodb://localhost:27017/");

mongoClient.connect(function (err, client) {
  if (err) {
    console.log("Error connecting to MongoDB:", err);
    return;
  }

  const db = client.db("Library");
  const collection = db.collection("Books");

  collection.find({ author: "Стивен Кинг" }).toArray(function (err, result) {
    if (err) {
      console.log("Error fetching documents:", err);
      client.close();
      return;
    }
    console.log("Books by Стивен Кинг:", result);
    client.close();
  });
});
