const express = require('express');
const router = express.Router();
const axios = require('axios');

const healthcheck = async (req, res) => {
    res.send('I\'m healthy');
}

const signInPage = async (req, res) => {
    res.render('users/sign-in');
}
const signIn = async (req, res) => {
    try {
        const user = axios.post('http://localhost:3001/sign-in',{
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

router.get('/healthcheck', healthcheck);
router.get('/sign-in', signInPage);
router.post('/sign-in', signIn);

module.exports = router;
