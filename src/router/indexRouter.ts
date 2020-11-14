import express from "express";

const router = express.Router();

import { index, results, searchArtist } from '../controller/indexController'

const { ensureAuthenticated } = require('../middleware/authentication');

router.get('/', ensureAuthenticated, index)
router.get('/results', ensureAuthenticated, results)
router.get('/search', ensureAuthenticated, searchArtist)

export default router
