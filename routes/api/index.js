const router = require("express").Router();
const eventRoutes = require("./events");
// const loginRoutes = require("./login");

// Event routes
router.use("/events", eventRoutes);
// router.use("/login", loginRoutes);

module.exports = router;