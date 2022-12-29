const express = require('express');
const usersRouter = require('./routes/users');

const app = express();

// config
const PORT = process.env.PORT || 3001;
const HOST_NAME = process.env.HOST_NAME || 'localhost'


// route setup
app.use('/users', usersRouter);

// db setup
const db = require('./models');
db.sequelize.sync();

// start
app.listen(PORT, HOST_NAME || 'localhost', ()=> {
    console.log(`users-service running at ${HOST_NAME}:${PORT}`)
})
