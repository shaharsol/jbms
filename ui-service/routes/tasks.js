const express = require('express');
const router = express.Router();
const axios = require('axios');

const TASKS_SERVICE_HOST = process.env.TASKS_SERVICE_HOST || 'localhost';
const TASKS_SERVICE_PORT = process.env.TASKS_SERVICE_PORT || '3002';

const healthcheck = async (req, res) => {
    res.send('I\'m healthy');
}

const userTasks = async (req, res) => {
    try {
        const tasks = await axios.get(`http://${TASKS_SERVICE_HOST}:${TASKS_SERVICE_PORT}/user-tasks/${req.params.user_id}`);
        res.render('tasks/list', {
            tasks: tasks.data
        });

    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
}

router.get('/healthcheck/', healthcheck);
router.get('/user/:user_id', userTasks);

module.exports = router;
