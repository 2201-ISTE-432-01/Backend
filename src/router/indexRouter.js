const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.isAuthenticated)
    res.send({ message: 'Hello World', spotifyAuthedUser: req.user })
})

module.exports = router;
