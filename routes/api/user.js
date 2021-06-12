const router = require('express').Router();
const userController = require('../../controllers/userController');
const authenticatedUser = require('../middleware/authenticateUser');

// Matches with "/api/user"
router
  .route('/')
  .post(authenticatedUser, userController.update);
// .get(userController.eventSearch)

// Matches with "/api/user/:email"
router
  .route('/')
  .get(authenticatedUser, userController.findUser);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(userController.findById);
//   .put(eventsController.update)
//   .delete(eventsController.remove);

module.exports = router;