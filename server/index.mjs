import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import projects from "./routes/projects.mjs";
import skills from "./routes/skills.mjs";
import messages from "./routes/messages.mjs";
import https from "https";
// const http = require("http");

import fs from "fs";
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /projects routes
app.use("/api/projects", projects);
app.use("/api/skills", skills);
app.use("/api/messages", messages);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

// const httpServer = http.createServer(app);
const httpsServer = https.createServer(
  {
    key: fs.readFileSync("/etc/letsencrypt/live/nocteln.fr/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/nocteln.fr/fullchain.pem"),
  },
  app
);

// start the Express server
httpsServer.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
