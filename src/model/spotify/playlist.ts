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

// https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/
export function getRecommendations(user: any, data: any) {
    return get('/recommendations', user.accessToken, data)
}

// https://developer.spotify.com/documentation/web-api/reference/search/search/
export function search(user: any, data: any) {
    return get('/search', user.accessToken, data)
}

// https://developer.spotify.com/console/get-available-genre-seeds/
export function genreSeeds(user: any) {
    return get('/recommendations/available-genre-seeds', user.accessToken)
}

// TODO: Any endpoints we want to use
