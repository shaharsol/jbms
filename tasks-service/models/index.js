const Sequelize = require('sequelize');
const task = require('./task');

const sequelize = new Sequelize('postgres://admin:password@localhost:5455/postgres', {
  dialect: 'postgres',
  dialectOptions: {},
  ssl: true,
  logging: false, // enable logging: NODE_CONFIG='{"postgres":{"logging":true}}' npm start
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Task = task(sequelize, Sequelize);

module.exports = db;
