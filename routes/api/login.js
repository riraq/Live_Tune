const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with "/api/login"
router.route('/')
  .post(userController.findOne);
// .post(userController.create);


module.exports = router;
