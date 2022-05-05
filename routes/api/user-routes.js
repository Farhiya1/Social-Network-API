// Requiring express router
const router = require("express").Router();

const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Takes you to /api/users <GET, POST>
router.route("/").get(getAllUsers).post(createUsers);

// Takes you to: /api/users/:id <GET, PUT, DELETE request>
router.route("/:id").get(getUsersById).put(updateUsers).delete(deleteUsers);

// Takes you to: /api/users/:userId/friends/:friendId <POST, DELETE request>
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

// Exports module router
module.exports = router;
