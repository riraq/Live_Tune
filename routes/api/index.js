const router = require("express").Router();
const eventRoutes = require("./events");
const loginRoutes = require("./login");
const userRoutes = require("./user");
const testRoutes = require("./test")
// Event routes
router.use("/events", eventRoutes);
router.use("/login", loginRoutes);
router.use("/test", testRoutes);
router.use("/user", userRoutes);

module.exports = router;