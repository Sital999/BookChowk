const Sequelize= require("sequelize")

// making connection with Sequelize instance by passing parameters seperately
const sequelize = new Sequelize('bookchowk','username','password',{
    host: 'localhost',
    // type of database
    dialect: 'sqlite',
    // name of storage 
    storage:"./bookchowk.sqlite"
})

// making db object to put different properties based on models
const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize
db.user=require('../models/userModel')

module.exports={db}