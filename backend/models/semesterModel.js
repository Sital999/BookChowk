module.exports=(sequelize,Sequelize)=>{
    const Semester=sequelize.define('Semester',{
        name:{
            type:Sequelize.ENUM,
            values:[1,2,3,4,5,6,7,8]
        }
    },{timestamps:false})
    return Semester
}