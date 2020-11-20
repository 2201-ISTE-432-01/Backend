import express from 'express';
import {genres, searchArtist} from "../controller/ajaxController";
import { ensureAuthenticated } from "../middleware/authentication";

const router = express.Router()

router.get('/searchArtist', ensureAuthenticated, searchArtist)
router.get('/genres', ensureAuthenticated, genres)

export default router;
