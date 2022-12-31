const express = require('express');
const router = express.Router();
const axios = require('axios');

const healthcheck = async (req, res) => {
    res.send('I\'m healthy');
}

const userTasks = async (req, res) => {
    try {
        const tasks = await axios.get(`http://localhost:3002/user-tasks/${req.params.user_id}`);
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
