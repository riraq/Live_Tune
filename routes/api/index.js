const router = require("express").Router();
const eventRoutes = require("./events");
const userRoutes = require("./user");
// const loginRoutes = require("./login");

// Event routes
router.use("/events", eventRoutes);
router.use("/user", userRoutes);
// router.use("/login", loginRoutes);

module.exports = router;