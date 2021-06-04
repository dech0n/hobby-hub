'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserHobbies', [
      {wheelhouseId: 1, hobbyId: 1, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 2, hobbyId: 2, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 3, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 3, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 1, hobbyId: 4, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 2, hobbyId: 5, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 6, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 1, hobbyId: 7, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 2, hobbyId: 8, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 9, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 1, hobbyId: 10, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 2, hobbyId: 11, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 12, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 1, hobbyId: 13, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 2, hobbyId: 14, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 15, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 1, hobbyId: 16, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 2, hobbyId: 17, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 18, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 1, hobbyId: 19, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 2, hobbyId: 20, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 21, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 1, hobbyId: 22, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 2, hobbyId: 23, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 24, createdAt: new Date(), updatedAt: new Date() },
      {wheelhouseId: 3, hobbyId: 25, createdAt: new Date(), updatedAt: new Date() },
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
