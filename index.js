const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Hii Umar,u got it");
});
app.get("/umar", (req, res) => {
  res.send("Hii Umar,u double got it");
});
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;