module.exports=(sequelize,Sequelize)=>{
    const string=Sequelize.STRING
    const integer=Sequelize.INTEGER
    const boolean=Sequelize.BOOLEAN
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
        isRent:{
            type:boolean,
            defaultValue:false
        },
        isSell:{
            type:boolean,
            defaultValue:false
        },
        bookImage:{
            type:string,
            allowNull:false
        }
    },{
        timestamps:false
    })
    return Book
}