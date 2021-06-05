const router = require("express").Router();
const eventRoutes = require("./events");
const loginRoutes = require("./login");
const userRoutes = require("./user");

// Event routes
router.use("/events", eventRoutes);
router.use("/login", loginRoutes);
router.use("/user", userRoutes);

module.exports = router;