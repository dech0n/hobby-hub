'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wheelhouse = sequelize.define('Wheelhouse', {
    status: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Wheelhouse.associate = function(models) {
    // associations can be defined here
  };
  return Wheelhouse;
};
