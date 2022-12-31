const express = require('express');
const router = express.Router();


const healthcheck = async (req, res) => {
    res.send('I\'m healthy');
}

const userTasks = async (req, res) => {
    try {
        const user = axios.post(`http://localhost:3002/user-tasks/${req.params.user_id}`,{
            data: {
                username: req.body.username,
                password: req.body.password,
            }
        });
        res.redirect(`/tasks/user/${user.id}`)

    } catch (e) {
        res.status(500).send(e);
    }
}

router.get('/healthcheck/', healthcheck);
router.get('/user/:user_id', userTasks);

module.exports = router;
