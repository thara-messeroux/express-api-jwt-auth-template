const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

// Sign in

// Sign up
router.post("/sign-up", async (req, res) => {
  try {
    // Goal: Create a new user
    // Step 1) Does this user already exist?
    const foundUserInDB = await User.findOne({ username: req.body.username });
    if (foundUserInDB)
      throw new Error(`User with username ${req.body.username} already exist`);
    // Step 1.5) Encrypt the Password before saving to DB (bcrypt)
    // Step 2) If not lets Create a new User
    const user = await User.create({
      ...req.body,
      hashedPassword: bcrypt.hashSync(req.body.password, 12),
    });
    // Step 3) If we want auto sign in (create a token and send it over)
    // Step 4) Send back token or Success Message
    res.status(201).json({ user });
  } catch (error) {
    res.json({ err: error.message });
  }
});

module.exports = router;
