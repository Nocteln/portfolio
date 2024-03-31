import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  let collection = await db.collection("projets");
  let results = await collection.find({}).limit(50).toArray();

  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  let collection = await db.collection("projets");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.delete("/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };

  const collection = db.collection("projets");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

// projets
// router.get("/api/projects", async (req,res) => {
//   let collection = await db.collection("projets")
//   let results = await collection.find({}).limit(50).toArray();

//   res.send(results).status(200)
// })

// Fetches the latest posts
// router.get("/latest", async (req, res) => {
//   let collection = await db.collection("posts");
//   let results = await collection.aggregate([
//     {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
//     {"$sort": {"date": -1}},
//     {"$limit": 3}
//   ]).toArray();
//   res.send(results).status(200);
// });

// // Get a single post
// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("posts");
//   let query = {_id: ObjectId(req.params.id)};
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // Add a new document to the collection
// router.post("/", async (req, res) => {
//   let collection = await db.collection("posts");
//   let newDocument = req.body;
//   newDocument.date = new Date();
//   let result = await collection.insertOne(newDocument);
//   res.send(result).status(204);
// });

// // Update the post with a new comment
// router.patch("/comment/:id", async (req, res) => {
//   const query = { _id: ObjectId(req.params.id) };
//   const updates = {
//     $push: { comments: req.body }
//   };

//   let collection = await db.collection("posts");
//   let result = await collection.updateOne(query, updates);

//   res.send(result).status(200);
// });

// // Delete an entry
// router.delete("/:id", async (req, res) => {
//   const query = { _id: ObjectId(req.params.id) };

//   const collection = db.collection("posts");
//   let result = await collection.deleteOne(query);

//   res.send(result).status(200);
// });

export default router;

/* Pour utiliser :

POST :

    async function test() {
      const nouveauProjet = {
        name: "Nouveau Projet",
        description: "Description du nouveau projet",
        url: "http://example.com",
        imageUrl: "http://example.com/image.jpg",
      };

      await fetch("http://localhost:5050/api/projects", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nouveauProjet),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de l'envoi des données.");
          }
          // Gérer la réponse si nécessaire
        })
        .catch((error) => {
          console.error("Erreur lors de la requête Fetch:", error);
        });
    }

    test();
    

    DELETE :
      async function test() {
      try {
        let resp = await fetch(
          "http://localhost:5050/api/projects/660998740567e73f71919ec8",
          {
            method: "DELETE",
          }
        );

        if (!resp.ok) {
          // Si la réponse n'est pas OK, lancer une erreur avec le statut de la réponse
          throw new Error(`Erreur ${resp.status} - ${resp.statusText}`);
        }
      } catch (error) {
        // Gérer l'erreur de manière appropriée, par exemple, afficher un message à l'utilisateur
        console.error("Erreur lors de la suppression du projet:", error);
      }
    }

    test()
    
    
    */
