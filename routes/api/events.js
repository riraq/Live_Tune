const router = require('express').Router();
const eventsController = require('../../controllers/eventsController');


// Matches with "/api/events/:search"
router
  .route('/:search')
  .get(eventsController.findEvents);

router
  .route('/:id')
  .get(eventsController.findEvent);

module.exports = router;