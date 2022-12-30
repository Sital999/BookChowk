const express=require('express')
const router=express.Router()
const {
  getSemester,
  postSemester,
  updateSemester,
  deleteSemester,
} = require("../controllers/semesterController");
const { protectedRoute } = require("../midlleware/authHandlerMiddleware");


router.route("/").get(getSemester).post(protectedRoute,postSemester);
router
  .route("/:semesterId")
  .put(protectedRoute, updateSemester)
  .delete(protectedRoute,deleteSemester);
module.exports=router