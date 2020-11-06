const playlist = require('../model/spotify/playlist')

exports.index = async function(req, res) {
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
}
