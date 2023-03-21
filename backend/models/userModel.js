module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
      },
      isNotification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      semester:{
        type: Sequelize.STRING,
        allowNull:false
      },
      department:{
        type: Sequelize.STRING,
        allowNull:false
      },
      userImage:{
        type: Sequelize.STRING,
        allowNull:true
      }
    },
    { timestamps: false }
  );
  return User;
};
