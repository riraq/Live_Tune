const router = require("express").Router();
const eventRoutes = require("./events");
const singleEventRoute = require("./event");
const userRoutes = require("./user");
// const loginRoutes = require("./login");

// Event routes
router.use("/events", eventRoutes);
router.use("/event", singleEventRoute);
router.use("/user", userRoutes);
// router.use("/login", loginRoutes);

module.exports = router;