const express = require('express');
const app = express();
const router = express.Router();
const userController = require('../controller/user');

router.get('/user/:sr/:firstName',userController.getSingleUser)

router.get('/add-user', userController.addUser);

router.post('/add-user', userController.addNewUser);

module.exports = router;