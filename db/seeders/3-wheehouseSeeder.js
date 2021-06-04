'use strict';

const { query } = require("express-validator");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wheelhouses', [
      {status: 'Want to Learn', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 3, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 3, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 3, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 4, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 4, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 4, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 6, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 6, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 6, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 7, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 7, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 7, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 8, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 8, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 8, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 9, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 9, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 9, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 10, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 10, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 10, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 11, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 11, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 11, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 12, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 12, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 12, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 13, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 13, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 13, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 14, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 14, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 14, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 16, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 16, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 16, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 15, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 15, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 15, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 17, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 17, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 17, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 18, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 18, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 18, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 19, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 19, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 19, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 20, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 20, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 20, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 21, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 21, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 21, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 22, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 22, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 22, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 23, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 23, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 23, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 24, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 24, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 24, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Want to Learn', userId: 25, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 25, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 25, createdAt: new Date(), updatedAt: new Date() },
      

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
    return queryInterface.bulkDelete('Wheelhouses', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
