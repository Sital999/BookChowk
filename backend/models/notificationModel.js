module.exports = (sequelize, Sequelize) => {
  const Notfication = sequelize.define(
    "Notfication",
    {
      rent: { type: Sequelize.INTEGER, defaultValue: 0 },
      buy: { type: Sequelize.INTEGER, defaultValue: 0 },
    },
    { timestamps: false }
  );
  return Notfication;
};
