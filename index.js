import { transactions } from "./transactions";
import { applications } from "./applications";
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/transactions", (req, res) => {
  res.send({transactions});
});
app.get("/applications", (req, res) => {
  res.send({applications});
});
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;