const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "webchatdb";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const userCollection = db.collection("users");

  // the following code examples can be pasted here...

  const user = { login: "tom", password: "tom123" };

  const insertResult = await userCollection.insertOne(user);
  console.log("Inserted documents =>", insertResult);

  const filterDoc = await userCollection.findOne({ login: "tom" });
  console.log(filterDoc);

  const updateResult = await userCollection.updateOne(
    { login: "tom" },
    { $set: { password: "tom321" } }
  );
  console.log("Updated documents =>", updateResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
