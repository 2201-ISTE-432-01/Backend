const axios = require('axios').default;

exports.get = function(path, accessToken) {
    return axios.get(path, {
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

exports.post = function(path, accessToken, data) {
    return axios.post(path, {
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        data: data
    })
}

exports.put = function(path, accessToken, data) {
    return axios.put(path, {
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        data: data
    })
}
