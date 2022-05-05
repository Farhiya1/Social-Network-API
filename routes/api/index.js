// Added requirment
const router = require("express").Router();

// Added user and thought routes
const usersRoutes = require("./user-routes");
const thoughtsRoutes = require("./thought-routes");

//To existing route, add '/users'.
router.use("/users", usersRoutes);

// To existing route, add '/thoughts'.
router.use("/thoughts", thoughtsRoutes);

// Exporting module router
module.exports = router;
