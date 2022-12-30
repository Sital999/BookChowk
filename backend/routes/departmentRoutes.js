const express = require("express");
const router = express.Router();
const {
  getDepartment,
  postDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");
const {protectedRoute} = require("../midlleware/authHandlerMiddleware")

router.route("/").get(getDepartment).post(protectedRoute,postDepartment);
router
  .route("/:departmentId")
  .put(protectedRoute, updateDepartment)
  .delete(protectedRoute,deleteDepartment);
module.exports = router;
