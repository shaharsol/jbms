const express = require('express');
const path = require('path');
const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');

const app = express();

// config
const PORT = process.env.APP_PORT || 3000;
const HOST_NAME = process.env.HOST_NAME || 'localhost'

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// route setup
app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

// db setup
// const db = require('./models');
// db.sequelize.sync();

// start
app.listen(PORT, HOST_NAME || 'localhost', ()=> {
    console.log(`ui-service running at ${HOST_NAME}:${PORT}`)
})
