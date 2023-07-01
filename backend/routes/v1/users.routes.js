const express = require('express');
const router = express.Router();
const { UserController } = require('../../controllers');
const auth = require('../../middlewares/auth');

router.get(
    '/',
    auth,
    UserController.getUsers
);

router.get(
    '/:userId',
    UserController.getUserById
);

module.exports = router;
