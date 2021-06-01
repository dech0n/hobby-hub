'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    title: DataTypes.STRING,
    link: DataTypes.TEXT,
    userHobbyId: DataTypes.INTEGER
  }, {});
  Resource.associate = function(models) {
    // associations can be defined here
  };
  return Resource;
};