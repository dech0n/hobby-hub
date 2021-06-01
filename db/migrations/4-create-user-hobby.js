'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserHobbies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wheelhouseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Wheelhouses' }
      },
      hobbyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Hobbies' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserHobbies');
  }
};
