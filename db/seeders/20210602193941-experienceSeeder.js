'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Experiences', [
        { hobbyId: 1, userId: 1, title: 'The best partner dance there is!', message: 'I can\'t get enough of this dance!', createdAt: new Date(), updatedAt: new Date() },
        { hobbyId: 1, userId: 2, title: 'The best partner dance there is!', message: 'I can\'t get enough of this dance!', createdAt: new Date(), updatedAt: new Date() },
        { hobbyId: 1, userId: 3, title: 'The best partner dance there is!', message: 'I can\'t get enough of this dance!', createdAt: new Date(), updatedAt: new Date() },
        { hobbyId: 1, userId: 4, title: 'The best partner dance there is!', message: 'I can\'t get enough of this dance!', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Experiences', null, {});
  }
};
