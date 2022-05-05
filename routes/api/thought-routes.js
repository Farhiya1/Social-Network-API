// Requiring express router
const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// Takes you to /api/thoughts <GET request>
router.route("/").get(getAllThoughts);

// Takes you to /api/thoughts/:id <GET, PUT, DELETE request>
router
  .route("/:id")
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

