import {genreSeeds, search} from "../model/spotify/playlist";
import { AxiosError, AxiosResponse } from "axios";

export function searchArtist(req: any, res: any) {
    const { name } = req.query;

    if (!name) {
        res.sendStatus(400);
        return;
    }

    search(req.user, {
        query: name,
        type: 'artist'
    })

        .then((results: AxiosResponse) => {
            res.send(results.data.artists.items)
        })

        .catch((err: AxiosError) => {
            console.log(err)
            res.send(500)
        })
}

export function genres(req: any, res: any) {
    genreSeeds(req.user)

        .then((results: AxiosResponse) => {
            res.send(results.data.genres)
        })

        .catch((err: AxiosError) => {
            console.log(err)
            res.send(500)
        })
}
