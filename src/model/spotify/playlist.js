const spotify = require ('../../spotify')

exports.getMine = function (user) {
    return spotify.get('/me/playlists', user.accessToken)
}
