const express = require('express')
const router = express.Router();

const indexController = require('../controller/indexController')

const { ensureAuthenticated } = require('../middleware/authentication');

router.get('/', ensureAuthenticated, indexController.index)

module.exports = router;
