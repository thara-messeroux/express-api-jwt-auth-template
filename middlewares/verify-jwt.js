// middlewares/verify-jwt.js

// This middleware is responsible for verifying the JWT token sent in the Authorization header of incoming requests. It checks if the token is valid and, if so, it decodes the token and attaches the user information to the request object for use in subsequent middleware or route handlers. If the token is invalid or missing, it responds with a 401 Unauthorized status.

const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded.user;
    console.log("Running Next");
    next();
  } catch (error) {
    res.status(401).json({ err: "Invalid Token" });
  }
};

module.exports = verifyJwt;