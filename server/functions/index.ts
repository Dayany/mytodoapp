const functions = require("firebase-functions");
const express = require("express");
const app = express();
const PORT = 3001;
app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

exports.app = functions.https.onRequest(app);
