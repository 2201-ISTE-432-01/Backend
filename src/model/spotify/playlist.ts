import { get, post } from '../../spotify'

// https://developer.spotify.com/documentation/web-api/reference/playlists/

// https://developer.spotify.com/documentation/web-api/reference/playlists/get-a-list-of-current-users-playlists/
export function getMine(user: any) {
    return get('/me/playlists', user.accessToken)
}

// https://developer.spotify.com/documentation/web-api/reference/playlists/create-playlist/
export function create(user: any, data: any) {
    return post(`/users/${user.id}/playlists`, user.accessToken, data)
}

// TODO: Any endpoints we want to use
