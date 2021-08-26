'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    title: DataTypes.STRING,
    link: DataTypes.TEXT,
    hobbyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Resource.associate = function(models) {
    // associations can be defined here
    Resource.belongsTo(models.Hobby, { foreignKey: 'hobbyId', onDelete: 'CASCADE' })
    Resource.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'CASCADE' })
  };
  return Resource;
};
