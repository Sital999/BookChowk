const express=require('express')
const router=express.Router()

const {protectedRoute}=require("../midlleware/authHandlerMiddleware")
const {getNotification,deleteNotification}=require("../controllers/notificationController") 

router.route("/").get(protectedRoute,getNotification)
router.route("/:id").delete(protectedRoute,deleteNotification)

module.exports=router