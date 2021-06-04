'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    hobbyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {});
  Experience.associate = function(models) {
    // associations can be defined here
    Experience.belongsTo(models.Hobby, { foreignKey: 'hobbyId' })
    Experience.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Experience;
};
