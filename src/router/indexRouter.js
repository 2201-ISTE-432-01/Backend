const express = require('express')
const router = express.Router();

const playlist = require('../model/spotify/playlist')

const { ensureAuthenticated } = require('../middleware/authentication');

router.get('/', ensureAuthenticated, async (req, res) => {
    console.log(req.user)

    playlist.getMine(req.user)
        .then(response => {
            console.log(response.data.items[0].images)

            res.render('index', {
                user: req.user.displayName,
                playlists: response.data.items
            })
        })
        .catch(err => {
            console.log(err)

            res.render('index', {
                user: req.user.displayName,
                error: true
            })
        })
})

module.exports = router;
