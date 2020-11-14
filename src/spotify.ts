const axios = require('axios').default;

export function get(path: string, accessToken: string, data?: any) {
    return axios.get(path, {
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: data
    })
}

export function post(path: string, accessToken: string, data: object) {
    return axios.post(path, {
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        data: data
    })
}

export function put(path: string, accessToken: string, data: object) {
    return axios.put(path, {
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        data: data
    })
}
