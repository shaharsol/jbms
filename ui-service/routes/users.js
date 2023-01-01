const express = require('express');
const router = express.Router();
const axios = require('axios');

const USERS_SERVICE_HOST = process.env.USERS_SERVICE_HOST || 'localhost';
const USERS_SERVICE_PORT = process.env.USERS_SERVICE_PORT || '3001';

const healthcheck = async (req, res) => {
    res.send('I\'m healthy');
}

const signInPage = async (req, res) => {
    res.render('users/sign-in');
}
const signIn = async (req, res) => {
    try {
        const user = await axios.post(`http://${USERS_SERVICE_HOST}:${USERS_SERVICE_PORT}/sign-in`, {
            username: req.body.username,
            password: req.body.password,
        });
        console.log(user.data.id)
        res.redirect(`/tasks/user/${user.data.id}`)

    } catch (e) {
        res.status(500).send(e);
    }
}

router.get('/healthcheck', healthcheck);
router.get('/sign-in', signInPage);
router.post('/sign-in', signIn);

module.exports = router;
