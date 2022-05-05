// Require express router
const router = require("express").Router();

// Importing API routes
const apiRoutes = require("./api");

// add `/api` to all of the api routes
router.use("/api", apiRoutes);

// Error message if there is no connection to routes
router.use((req, res) => {
  res.status(404).send("<h1>404 Error....</h1>");
});

// Exports module router
module.exports = router;
