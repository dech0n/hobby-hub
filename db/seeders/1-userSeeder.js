'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {firstName: 'Demo', lastName: 'User', username: 'Demo', email: 'demo@user.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Bradley', lastName: 'Cooper', username: 'ChrisKyle', email: 'bcoop@snipes.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Jennifer', lastName: 'Lawrence', username: 'IVolunteerAsTribute', email: 'jenny@xmen.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Johnny', lastName: 'Depp', username: 'CaptainJackSparrow', email: 'black@pearl.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Robert', lastName: 'Pattinson', username: 'Sparkles', email: 'psychoboyfriend@vegetarian.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Emma', lastName: 'Watson', username: 'Hermione', email: 'super@smart.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Gustaf', lastName: 'Skarsgard', username: 'Floki', email: 'iloveskarsgards@billisthebesttho.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Mila', lastName: 'Jovovich', username: 'LeeLooDallasMultiPass', email: 'thefifthelement@space.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Chris', lastName: 'Hemsworth', username: 'TheStrongestAvenger', email: 'Asgard4eva@midgard.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Robert', lastName: 'Downey Jr.', username: 'RIPIronMan', email: 'snarkyaf@iamironman.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Kit', lastName: 'Harrington', username: 'TheKingInTheNorth', email: 'iknownothing@johnsnow.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Henry', lastName: 'Cavill', username: 'GeraltOfRivia', email: 'superman@dreamboat.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'John', lastName: 'Krasinski', username: 'JimHalpert', email: 'quietplace@goodmovie.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Rainn', lastName: 'Wilson', username: 'SchruteFarmBeetsMusic', email: 'battlestar@galactica.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Jason', lastName: 'Bateman', username: 'ArrestedDevelopmentForever', email: 'never@seenitsadface.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Jennifer', lastName: 'Connelly', username: 'IsecretlyLoveTheGoblinKing', email: 'itsnotfair@yay.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Will', lastName: 'Ferrell', username: 'WillFerrellForPresident', email: 'so@funny.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'John', lastName: 'Riley', username: 'Dale.Doback', email: 'heis@awesome.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Bob', lastName: 'Bobson', username: 'TomHiddlestonIsMyHero', email: 'Hello@dreamboat.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'George', lastName: 'Georgeson', username: 'WakandaForever', email: 'gorgeous@dreamboat.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Mike', lastName: 'Someone', username: 'Hakuna.Matata', email: 'I@dreamboat.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'orange', lastName: 'Idk', username: 'MyPrecious', email: 'gave@dreamboat.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'Gloria', lastName: 'thisIsTakingForever', username: 'GREATSCOTT', email: 'up@dreamboat.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'purlpe', lastName: 'green', username: 'Don.Corleone', email: 'atthe@dreamboat.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
      {firstName: 'hello', lastName: 'hi', username: 'SarahConner', email: 'end@dreamboat.com', hashedPassword: '$2a$10$VrnuQDHjCdjw9/c3SRPL/.DIJIpLglyX3ZX.OhgNDQYGKlXKGC8mO', createdAt: new Date(), updatedAt: new Date() },
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
