import {getMine, getRecommendations, search} from "../model/spotify/playlist";


export function index(req: any, res: any) {
    getMine(req.user)
        .then((response: any) => {
            console.log(response.data.items[0].images)

            res.render('index', {
                user: req.user.displayName,
                playlists: response.data.items
            })
        })
        .catch((err: any) => {
            console.log(err)

            res.render('index', {
                user: req.user.displayName,
                error: true
            })
        })
}

export async function results(req: any, res: any) {
    const {quantity, genres, artists} = req.query

    if (!quantity) {
        res.render('results', {
            error: true
        })
    }

    getRecommendations(req.user, {
        target_tempo: quantity,
        seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
        seed_tracks: '0c6xIDDpzE81m2q797ordA'
    })
        .then((recommendations: any) => {
            console.log(recommendations.data)
            res.render('results', {
                recommendations: recommendations
            })
        })

        .catch((err: any) => {
            console.log(err)
            res.send(500)
        })
}

export async function searchArtist(req: any, res: any) {
    const { name } = req.query

    if (!name) {
        res.send(400)
        return;
    }

    search(req.user, {
        query: name,
        type: 'artist'
    })

        .then((results: any) => {
            res.send(results.data)
        })

        .catch((err: any) => {
            console.log(err)
            res.send(500)
        })
}
