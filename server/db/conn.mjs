import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://nocteln:AaUwsTF92rOVFnio@cluster0.jfqg0ol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; //process.env.DATABASE_URI || "";
console.log(connectionString);
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("data");

export default db;
