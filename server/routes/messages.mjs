import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("messages");
  let result = await collection.find({}).toArray();
  res.send(result).status(200);
});

router.post("/", async (req, res) => {
  let collection = await db.collection("messages");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.delete("/:id", async (req, res) => {
  console.log("delete");
  const query = { _id: ObjectId(req.params.id) };

  const collection = db.collection("messages");
  console.log(collection);
  let result = await collection.deleteOne(query);
  console.log(result);
  res.send(result).status(200);
});

router.post("/archive", async (req, res) => {
  let collection = await db.collection("messagesArchived");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.get("/archive", async (req, res) => {
  let collection = await db.collection("messagesArchived");
  let result = await collection.find({}).toArray();
  res.send(result).status(200);
});

export default router;
