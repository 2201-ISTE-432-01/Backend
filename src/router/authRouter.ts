import express from "express";
import passport from "../passport";

const router = express.Router();

router.get('/spotify', passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
}))

router.get('/spotify/callback',
    passport.authenticate('spotify', {
        scope: ['user-read-private', 'playlist-read-private']
    }),
    (req, res) => {
        res.redirect('/')
    })

export default router
