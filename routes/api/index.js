const router = require("express").Router();
const eventRoutes = require("./events");
const singleEventRoute = require("./event");
const loginRoutes = require("./login");
const userRoutes = require("./user");

// Event routes
router.use("/events", eventRoutes);
router.use("/event", singleEventRoute);
router.use("/login", loginRoutes);
router.use("/user", userRoutes);

module.exports = router;