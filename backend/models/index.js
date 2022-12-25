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
db.user=require('../models/userModel')(sequelize,Sequelize)
db.semester=require('../models/semesterModel')(sequelize,Sequelize)
db.department=require('../models/departmentModel')(sequelize,Sequelize)
db.book=require('../models/bookModel')(sequelize,Sequelize)
db.notification=require('../models/notificationModel')(sequelize,Sequelize)

// relationships between models and both hasMany and belongsTo works same
db.user.hasMany(db.notification,{foreignKey:'userID'})
db.user.hasMany(db.book,{foreignKey:'userID'})
db.book.belongsTo(db.semester,{foreignKey:'semesterID'})
db.book.belongsTo(db.department, { foreignKey: "departmentID" });

module.exports={db}