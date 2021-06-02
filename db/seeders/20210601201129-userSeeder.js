'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {firstName: 'Demo', lastName: 'User', username: 'Demo', email: 'demo@user.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Bradley', lastName: 'Cooper', username: 'ChrisKyle', email: 'bcoop@snipes.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Jennifer', lastName: 'Lopez', username: 'JennyFromThaBlock', email: 'jenny@popstar.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Johnny', lastName: 'Depp', username: 'CaptainJackSparrow', email: 'black@pearl.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Robert', lastName: 'Pattinson', username: 'Sparkles', email: 'psychoboyfriend@vegetarian.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
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
    return queryInterface.bulkDelete('Users', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
