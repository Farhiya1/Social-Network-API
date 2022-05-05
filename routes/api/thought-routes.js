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

// Takes you to /api/thoughts/:userId <POST request>
router.route("/:userId").post(createThoughts);

// Takes you to /api/thoughts/:thoughtId/reactions <POST request>
router.route("/:thoughtId/reactions").post(addReaction);

// Takes you to: /api/thoughts/:thoughtId/reactionId <DELETE request>
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// Exporting module router
module.exports = router;
