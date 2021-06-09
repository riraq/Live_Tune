const router = require('express').Router();
const eventsController = require('../../controllers/eventsController');

// Matches with "/api/event/:id"
router
  .route('/:id')
  .get(eventsController.findEvent);
//   .put(eventsController.update)
//   .delete(eventsController.remove);

module.exports = router;