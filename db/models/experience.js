'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    userHobbyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {});
  Experience.associate = function(models) {
    // associations can be defined here
  };
  return Experience;
};