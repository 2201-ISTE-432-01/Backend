import {getMine} from "../model/spotify/playlist";


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
