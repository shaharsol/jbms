const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();

// config
const PORT = process.env.PORT || 3002;
const HOST_NAME = process.env.HOST_NAME || 'localhost'


// route setup
app.use('/', tasksRouter);

// db setup
const db = require('./models');
db.sequelize.sync();

// start
app.listen(PORT, HOST_NAME || 'localhost', ()=> {
    console.log(`tasks-service running at ${HOST_NAME}:${PORT}`)
})
