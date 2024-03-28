require("dotenv/config");
const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DATABASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const val = [
  {
    name: "duo",
    description: "duolingo clone",
    url: "https://duolingo.com",
  },
  {
    name: "backtothefuture",
    description: "Back to the Future",
    url: "https://backtothefuture.com",
  },
];

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected correctly to server");

    const db = client.db("data");
    const projets = db.collection("projets");

    const options = { ordered: true };
    // const result = await projets.insertMany(val, options);

    // console.log(`${result.insertedCount} documents inserted`);

    const res = await projets.findOne({ name: "backtothefuture" });
    console.log(res);

    // const movies = database.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: "Back to the Future" };

    // const test = await database.collection("movies").findOne(query);

    // const res = await database.command({ dbStats: 1 });

    // const cursor = database.collection("movies").find({});
    // console.log(cursor);

    // const movie = await movies.findOne(query);

    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
