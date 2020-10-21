const axios = require('axios').default;

exports.get = function(path, accessToken) {
    return axios.get(path, {
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
