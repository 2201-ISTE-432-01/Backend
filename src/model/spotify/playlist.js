const spotify = require ('../../spotify')

// https://developer.spotify.com/documentation/web-api/reference/playlists/

// https://developer.spotify.com/documentation/web-api/reference/playlists/get-a-list-of-current-users-playlists/
exports.getMine = function (user) {
    return spotify.get('/me/playlists', user.accessToken)
}

// https://developer.spotify.com/documentation/web-api/reference/playlists/create-playlist/
exports.create = function(user, data) {
    return spotify.post(`/users/${user.id}/playlists`, user.accessToken, data)
}

// TODO: Any endpoints we want to use
