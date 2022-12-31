const Sequelize = require('sequelize');
const user = require('./User');

const DB_USERNAME = process.env.DB_USERNAME || 'admin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '5455';
const DB_SCHEMA = process.env.DB_SCHEMA || 'postgres';

const connectionString = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_SCHEMA}`;
console.log(`connecting to ${connectionString}`)
const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  dialectOptions: {},
  ssl: true,
  logging: false, // enable logging: NODE_CONFIG='{"postgres":{"logging":true}}' npm start
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = user(sequelize, Sequelize);
module.exports = db;
