import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import projects from "./routes/projects.mjs";
import skills from "./routes/skills.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /projects routes
app.use("/api/projects", projects);
app.use("/api/skills", skills);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
