import express from "express";

const router = express.Router();

import { index, results } from '../controller/indexController'

const { ensureAuthenticated } = require('../middleware/authentication');

router.get('/', ensureAuthenticated, index)
router.get('/results', ensureAuthenticated, results)

export default router
