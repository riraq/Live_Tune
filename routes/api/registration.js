const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with "/api/registration"
router.route('/')
  .post(userController.register);

router
  .route('/:id')
  .get(userController.findById);

module.exports = router;
