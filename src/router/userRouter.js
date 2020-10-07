const express = require('express')
const router = express.Router();

const UserController = require ('../controller/userController')

router.get('/', UserController.getAll);

module.exports = router;
