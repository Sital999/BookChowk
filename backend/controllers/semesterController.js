const asyncHandler = require('express-async-Handler');
const {db}=require('../models')
const Semester=db.semester

// get semester
// GET /api/semester

const getSemester = asyncHandler(async(req,res)=>{
    const semester =await Semester.findAll({})

    return res.status(200).json({semester})
    
})

// post semester
// POST /api/semester

const postSemester = asyncHandler(async(req,res)=>{
    const {semester}=req.body

    const sem=await Semester.create({name:semester})

    return res.status(201).json({sem})
})

// update semester
// PUT /api/semester/semesterId

const updateSemester = asyncHandler(async(req,res)=>{
    const {semesterId}=req.params
    const {semester}=req.body
    const sem=await Semester.findOne({where:{id:semesterId}})
    if (!sem){
        res.status(400)
        throw new Error(`No semester found with id: ${semesterId}`)
    }
    // updating semester of resp. id with data provided
    await sem.update({name: semester },{ where: { id: semesterId} });
    res.status(200).json({semester:sem})

})

// delete semester
// DELETE /api/semester/semesterId

const deleteSemester=asyncHandler(async(req,res)=>{
    const { semesterId } = req.params;
    const { semester } = req.body;
    const sem = await Semester.findOne({ where: { id: semesterId } });
    if (!sem) {
      res.status(400);
      throw new Error(`No semester found with id: ${semesterId}`);
    }
    // updating semester of resp. id with data provided
    await sem.destroy();
    res.status(200).json({ semesterId });
})

module.exports= {getSemester,postSemester,updateSemester,deleteSemester}