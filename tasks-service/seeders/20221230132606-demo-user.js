'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tasks', [{
       id: '416b5e97-fe0d-4087-8cc1-ea4c83f8021f',
       user_id: '589ca551-da29-4a7e-b666-08db0e1e6db7',
       description: 'prepare a lecture',
       status: 'todo',
       created_at: new Date(),
       updated_at: new Date(),
     },{
       id: 'e05e9077-e5fa-4529-b565-cd9aa3d1fc85',
       user_id: '589ca551-da29-4a7e-b666-08db0e1e6db7',
       description: 'design the micro service',
       status: 'doing',
       created_at: new Date(),
       updated_at: new Date(),
     },{
       id: '7b268e85-9833-456c-92fa-d646f0eebd38',
       user_id: '589ca551-da29-4a7e-b666-08db0e1e6db7',
       description: 'solve the SQL issue',
       status: 'done',
       created_at: new Date(),
       updated_at: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
