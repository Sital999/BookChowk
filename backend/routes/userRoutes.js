const express = require("express");
const router = express.Router();
const { registerUser,loginUser ,users} = require("../controllers/userController");

router.route("/").post(registerUser);
router.route("/login").post(loginUser)
router.route("/users").get(users)

module.exports = router