const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const {db} = require("../models");
const User = db.user;

const protectedRoute = asyncHandler(async (req, res, next) => {

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            let token;
            token = req.headers.authorization.split(" ")[1];
            decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.userId = decoded.id;
            next();
        } catch (err) {
            res.status(401);
            throw new Error(err.message);
        }
    } else {
        res.status(401);
        throw new Error("Not Authorized, No token");
    }
});

module.exports = {protectedRoute}
