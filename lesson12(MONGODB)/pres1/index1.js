const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient("mongodb://localhost:27017/");

async function main() {
  await mongoClient.connect();
  const db = mongoClient.db("Library");
  const collection = db.collection("Books");

  const result = await collection.find({ author: "Стивен Кинг" }).toArray();

  const result1 = await collection
    .find({ author: "Кэтрин Стокетт", Name: "Прислуга" })
    .toArray();

  await collection.deleteMany({ year: "2019" }, () => {
    mongoClient.close(); // Corrected to mongoClient
  });

  console.log("Books by Стивен Кинг:", result);
  console.log("'Прислуга' book by Кэтрин Стокетт:", result1);
  await collection.find().toArray((result) => {
    console.log(result);
    client.close();
  });
}

main()
  // .then((data) => console.log(data, 1))
  // .catch((error) => console.log(error, 2))
  .finally(() => mongoClient.close());
