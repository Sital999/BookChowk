const asyncHandler = require("express-async-handler");
const { db } = require("../models");
const Department = db.department;

// get department
// GET /api/department

const getDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findAll({});

  return res.status(200).json({ department });
});

// post department
// POST /api/department

const postDepartment = asyncHandler(async (req, res) => {
  const { department } = req.body;

  const dept = await Department.create({ name: department });

  return res.status(201).json({ dept });
});

// update department
// PUT /api/department/departmentId

const updateDepartment = asyncHandler(async (req, res) => {
  const { departmentId } = req.params;
  const { department } = req.body;
  const dept = await Department.findOne({ where: { id: departmentId } });
  if (!dept) {
    res.status(400);
    throw new Error(`No department found with id: ${departmentId}`);
  }
  // updating department of resp. id with data provided
  await dept.update({ name: department }, { where: { id: departmentId } });
  res.status(200).json({ department: dept });
});

// delete department
// DELETE /api/department/departmentId

const deleteDepartment = asyncHandler(async (req, res) => {
  const { departmentId } = req.params;
  const dept = await department.findOne({ where: { id: departmentId } });
  if (!dept) {
    res.status(400);
    throw new Error(`No department found with id: ${departmentId}`);
  }
  // updating department of resp. id with data provided
  await dept.destroy();
  res.status(200).json({ departmentId });
});

module.exports = { getDepartment, postDepartment, updateDepartment, deleteDepartment };
