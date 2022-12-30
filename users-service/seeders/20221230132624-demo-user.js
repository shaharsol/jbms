'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
       id: '589ca551-da29-4a7e-b666-08db0e1e6db7',
       username: 'shaharsol',
       password: 'admin',
       created_at: new Date(),
       updated_at: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
