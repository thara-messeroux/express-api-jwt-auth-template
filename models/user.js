// models/user.js
// This file defines the User model using Mongoose. 
// It specifies the schema for user documents in the MongoDB database, 
// including fields for username, hashed password, and any additional 
// information you want to store about users. This model will be used 
// to create, read, update, and delete user data in the database.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  // Add in additional fields you want
  email: String,
  phoneNumber: String,
  address: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
