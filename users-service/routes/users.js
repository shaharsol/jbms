const express = require('express');
const router = express.Router();
const db = require('../models');

const healthcheck = async (req, res) => {
    res.send('I\'m healthy');
}

const signIn = async (req, res) => {
    const user = await db.User.findAll({
        where: {
          username: req.body.username,
          password: req.body.password
        }
    });
    if (!user[0]) {
        console.log('can\'t find user');
        return res.status(401).send('Unauthorized');
    }
    console.log(`signed in user id ${user[0].id}`)
    return res.json(user[0]);
}

router.get('/healthcheck/', healthcheck);
router.post('/sign-in/', signIn);

module.exports = router;
