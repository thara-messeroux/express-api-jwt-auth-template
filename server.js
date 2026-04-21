// Load environment variables from .env
require("dotenv").config();

// Import the tools our server needs
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

// Create the Express app
const app = express();

// Connect to MongoDB using the secret URL from .env
mongoose.connect(process.env.MONGODB_URI);

// Let us know in the terminal when MongoDB connects
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware = helpers that run before routes
app.use(cors()); // lets other apps talk to this API
app.use(express.json()); // lets us read JSON from requests
app.use(logger("dev")); // shows requests in the terminal

// Test route so we know the server is alive
app.get("/", (req, res) => {
  res.json({ message: "The Express API is running." });
});

// Start the server
app.listen(3000, () => {
  console.log("The express app is ready!");
});
