const express = require('express');
const usersRouter = require('./routes/users');

const app = express();

// config
const PORT = process.env.APP_PORT || 3001;
const HOST_NAME = process.env.HOST_NAME || 'localhost'

// input setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route setup
app.use('/', usersRouter);

// db setup
const db = require('./models');
db.sequelize.sync();

// start
app.listen(PORT, HOST_NAME || 'localhost', ()=> {
    console.log(`users-service running at ${HOST_NAME}:${PORT}`)
})
