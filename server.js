// server.js
// this is the main file that runs our express server. It imports all the necessary dependencies, sets up middleware, connects to the database, and defines the routes for our API. When we run this file, it starts the server and listens for incoming requests on a specified port.
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const testController = require("./controllers/test-jwt");
const authController = require("./controllers/auth");
require("./db/connection");

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// Routes go here
app.use("/test-jwt", testController);
app.use("/auth", authController);
app.listen(3000, () => {
  console.log("The express app is ready!");
});
