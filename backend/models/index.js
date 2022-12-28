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
db.user=require('./userModel')(sequelize,Sequelize)
db.semester=require('./semesterModel')(sequelize,Sequelize)
db.department=require('./departmentModel')(sequelize,Sequelize)
db.book=require('./bookModel')(sequelize,Sequelize)
db.notification=require('./notificationModel')(sequelize,Sequelize)

// relationships between models and both hasMany and belongsTo works same
db.user.hasMany(db.notification,{foreignKey:'userID'})
db.user.hasMany(db.book,{foreignKey:'userID'})
db.book.belongsTo(db.semester,{foreignKey:'semesterID'})
db.book.belongsTo(db.department, { foreignKey: "departmentID" })


module.exports={db}