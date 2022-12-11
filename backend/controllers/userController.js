const asyncHandler=require('express-async-handler')

const handleUser=asyncHandler(async(req,res)=>{
    res.send("k xa khabar")
})

module.exports={
    handleUser
}