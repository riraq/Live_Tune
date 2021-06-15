const router = require('express').Router();
const userController = require('../../controllers/userController');
const authenticatedUser = require('../middleware/authenticateUser');


router
.route('/')
.post(authenticatedUser, userController.updateLocation);


module.exports = router;