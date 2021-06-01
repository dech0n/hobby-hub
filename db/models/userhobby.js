'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserHobby = sequelize.define('UserHobby', {
    wheelhouseId: DataTypes.INTEGER,
    hobbyId: DataTypes.INTEGER
  }, {});
  UserHobby.associate = function(models) {
    // associations can be defined here
  };
  return UserHobby;
};