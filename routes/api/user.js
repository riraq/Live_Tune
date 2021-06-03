const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
// router.route("/")
//   .get(userController.eventSearch)
  // .get(eventsController.findAll)
  // .post(eventsController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
//   .put(eventsController.update)
//   .delete(eventsController.remove);

module.exports = router;