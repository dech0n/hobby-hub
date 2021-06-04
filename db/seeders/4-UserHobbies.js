'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserHobbies', [
      {wheelhouseId: 1, hobbyId: 1, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 2, hobbyId: 2, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 3, createdAt: new Date(), updatedAt: new Date() },
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserHobbies', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
