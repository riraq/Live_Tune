const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with "/api/user"
router
  .route('/')
  .post(userController.update);
// .get(userController.eventSearch)

// Matches with "/api/user/:email"
router
  .route('/:email')
  .get(userController.findUser);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(userController.findById);
//   .put(eventsController.update)
//   .delete(eventsController.remove);

module.exports = router;