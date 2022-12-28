const express=require('express')
const router=express.Router()
const {
  getSemester,
  postSemester,
  updateSemester,
  deleteSemester,
} = require("../controllers/semesterController");

router.route('/').get(getSemester).post(postSemester)
router.route('/:semesterId').put(updateSemester).delete(deleteSemester)
module.exports=router