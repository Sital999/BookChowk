module.exports = (sequelize, Sequelize) => {
  const Notfication = sequelize.define("Notfication", {
    rent: { type: Sequelize.BOOLEAN, defaultValue: false },
    buy: { type: Sequelize.BOOLEAN, defaultValue: false },
    return: { type: Sequelize.BOOLEAN, defaultValue: false },
    acknowledge: { type: Sequelize.BOOLEAN, defaultValue: false },
    buyer: { type: Sequelize.STRING },
    renter: { type: Sequelize.STRING },
    bookNamed: { type: Sequelize.STRING}
  });
  return Notfication;
};
