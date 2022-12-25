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
    },
    { timestamps: false }
  );
  return User;
};
