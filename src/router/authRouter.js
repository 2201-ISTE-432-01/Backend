const express = require('express')
const router = express.Router();

const passport = require('../passport')

router.get('/spotify', passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    showDialog: true,
}))

router.get('/spotify/callback',
    passport.authenticate('spotify', {

    }),
    (req, res) => {
        res.redirect('/')
    })

module.exports = router;
