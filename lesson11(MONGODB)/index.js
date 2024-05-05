const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    const db = client.db("test");
    const collection = db.collection("users");
    console.log("Успешно подключение к базе данных");
    let user = { name: "Itgenik123" };
    const result = await collection.insertOne(user);
    console.log(`Был вставлен документ с _id: ${result.insertId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
