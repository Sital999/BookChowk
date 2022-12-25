const express = require("express");
const router = express.Router();
const {handleUser} = require("../controllers/userController")

router.route("/").get(handleUser);

module.exports = router