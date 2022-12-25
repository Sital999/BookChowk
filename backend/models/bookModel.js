module.exports=(sequelize,Sequelize)=>{
    const string=Sequelize.STRING
    const integer=Sequelize.INTEGER
    const Book=sequelize.define('Book',{
        name:{
            type:string,
            allowNull:false
        },
        genre:{
            type:string,
            defaultValue:'Novel'
        },
        rent_price:{
            type:integer,
            defaultValue:0
        },
        selling_price:{
            type:integer,
            defaultValue:0
        },
        description:{
            type:string,
        },
    },{
        timestamps:false
    })
    return Book
}