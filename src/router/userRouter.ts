import express from "express";

const router = express.Router();

const UserController = require ('../controller/userController')

router.get('/', UserController.getAll);

export default router
