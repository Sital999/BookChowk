const express = require("express");
const router = express.Router();
const {
  getDepartment,
  postDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

router.route("/").get(getDepartment).post(postDepartment);
router.route("/:departmentId").put(updateDepartment).delete(deleteDepartment);
module.exports = router;
