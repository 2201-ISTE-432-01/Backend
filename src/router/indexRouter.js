const express = require('express')
const router = express.Router();

const { ensureAuthenticated } = require('../middleware/authentication');

router.get('/', ensureAuthenticated, (req, res) => {

    res.render('index', {
        user: req.user.displayName
    })
})

module.exports = router;
