const express = require('express');
const router = express.Router();
const db = require('../models');

const healthcheck = async (req, res) => {
    res.send('I\'m healthy');
}

const userTasks = async (req, res) => {
    const tasks = await db.Task.findAll({
        where: {
          user_id: req.params.user_id,
        }
    });
    console.log(`fetched ${tasks.length} tasks for user_id ${req.params.user_id}`);
    return res.json(tasks);
}

router.get('/healthcheck/', healthcheck);
router.get('/user-tasks/:user_id', userTasks);

module.exports = router;
