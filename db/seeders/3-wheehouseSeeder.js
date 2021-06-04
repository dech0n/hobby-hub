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
      {status: 'Want to Learn', userId: 5, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Currently Learning', userId: 5, createdAt: new Date(), updatedAt: new Date() },
      {status: 'Accomplished', userId: 5, createdAt: new Date(), updatedAt: new Date() },
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
