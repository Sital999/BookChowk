const express = require("express");
const multer=require("multer");
const path = require("path");
const router = express.Router();
const {
  registerUser,
  loginUser,
  users,
  updateSemDept,
} = require("../controllers/userController");
const {protectedRoute} = require("../midlleware/authHandlerMiddleware")


const storage=multer.diskStorage({
  destination:'./frontend/src/media/Images/userImage/',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload=multer({
  storage:storage
})

router.route("/").post(upload.single('userImage'),registerUser);
router.route("/login").post(loginUser)
router.get("/users",protectedRoute,users)
router.put("/update",protectedRoute,updateSemDept)

module.exports = router