import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
console.log(connectionString);
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
console.log(conn);
let db = conn.db("data");

export default db;
