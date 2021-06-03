'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    title: DataTypes.STRING,
    link: DataTypes.TEXT,
    userHobbyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Resource.associate = function(models) {
    // associations can be defined here
    Resource.belongsTo(models.UserHobby, { foreignKey: 'userHobbyId' })
    Resource.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Resource;
};
