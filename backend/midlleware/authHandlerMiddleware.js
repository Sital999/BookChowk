const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { db } = require("../models");
const User = db.user;

const protectedRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.userID = decoded.id;
      next();
    } catch (err) {
      res.status(401);
      throw new Error(err.message);
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No token");
  }
});

module.exports ={protectedRoute}
