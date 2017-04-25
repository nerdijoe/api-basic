'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let data = [
      { name: 'James Harden', username: 'beard', phone:'013131313', email: 'thebeard@rockets.com', password: 'haha', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Russel Westbrook', username: 'russ', phone:'0000000', email: 'rw@thunders.com', password: 'haha', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Steph Curry', username: 'curry', phone:'3030303030', email: 'curry@warriors.com', password: 'haha', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Giannis Antetokounmpo', username: 'greekfreak', phone:'34343434', email: 'greekfreak@bucks.com', password: 'haha', createdAt: new Date(), updatedAt: new Date() }
    ];

    return queryInterface.bulkInsert('Users', data, {});



  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
