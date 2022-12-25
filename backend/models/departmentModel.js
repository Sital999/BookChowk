module.exports=(sequelize,Sequelize)=>{
    const Department=sequelize.define('Department',{
        name:{
            type:Sequelize.STRING,
            unique:true,
            allowNull:false
        }
    },{timestamps:false})
    return Department
}