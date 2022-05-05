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

