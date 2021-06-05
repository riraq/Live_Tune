const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
// router.route("/")
// .get(eventsController)
// .get(eventsController.findAll)
// .post(eventsController.create);

// Matches with "/api/events/:search"
router
  .route("/:search")
  .get(eventsController.findEvents)
//   .put(eventsController.update)
//   .delete(eventsController.remove);

module.exports = router;