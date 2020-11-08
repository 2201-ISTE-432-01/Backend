import express from "express";

const router = express.Router();

import { index } from '../controller/indexController'

const { ensureAuthenticated } = require('../middleware/authentication');

router.get('/', ensureAuthenticated, index)

export default router
