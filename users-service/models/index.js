const Sequelize = require('sequelize');
const user = require('./user');

const sequelize = new Sequelize('postgres://admin:password@localhost:5455/postgres', {
  dialect: 'postgres',
  dialectOptions: {},
  ssl: true,
  logging: false, // enable logging: NODE_CONFIG='{"postgres":{"logging":true}}' npm start
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
