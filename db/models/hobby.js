'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hobby = sequelize.define('Hobby', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.STRING
  }, {});
  Hobby.associate = function(models) {
    // associations can be defined here
    // const columnMapping = {
    //   through: 'UserHobbies',
    //   foreignKey: 'hobbyId',
    //   otherKey: 'wheelhouseId',
    // }

    // Hobby.belongsToMany(models.Wheelhouse, columnMapping)
    Hobby.hasMany(models.UserHobby, { foreignKey: 'wheelhouseId' });
    Hobby.hasMany(models.Experience, { foreignKey: 'hobbyId' });
    Hobby.hasMany(models.Resource, { foreignKey: 'hobbyId' })

  };
  return Hobby;
};
