'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hobby = sequelize.define('Hobby', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.STRING
  }, {});
  Hobby.associate = function(models) {
    Hobby.hasMany(models.UserHobby, { foreignKey: 'wheelhouseId' });
    Hobby.hasMany(models.Experience, { foreignKey: 'hobbyId' });
    Hobby.hasMany(models.Resource, { foreignKey: 'hobbyId' });

  };
  return Hobby;
};
