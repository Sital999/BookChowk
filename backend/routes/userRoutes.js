const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  users,
  updateSemDept,
} = require("../controllers/userController");
const {protectedRoute} = require("../midlleware/authHandlerMiddleware")

router.route("/").post(registerUser);
router.route("/login").post(loginUser)
router.get("/users",protectedRoute,users)
router.put("/update",protectedRoute,updateSemDept)

module.exports = router