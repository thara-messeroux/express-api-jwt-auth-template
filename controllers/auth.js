const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Sign in
router.post("/sign-in", async (req, res) => {
  try {
    // Goal: Sign a user
    // Step 1) Does this user already exist
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      throw new Error(`User with username ${req.body.username} does not exist`);
    // Step 2) Check that Users Password with the pw from the DB (with bcrypt)
    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      user.hashedPassword,
    );

    if (!isValidPassword) throw new Error("Invalid Credentials");
    // Step 3) If the PW is correct, send back a token

    const token = jwt.sign({ user }, process.env.SECRET_KEY);
    res.status(200).json({ token });
  } catch (error) {
    res.json({ err: error.message });
  }
});

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
    const token = jwt.sign({ user }, process.env.SECRET_KEY);

    // Step 4) Send back token or Success Message
    res.status(201).json({ token });
  } catch (error) {
    res.json({ err: error.message });
  }
});

module.exports = router;
