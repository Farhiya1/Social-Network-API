// Requiring Users Model
const { Users } = require("../models");

const usersController = {
  // Create a new User
  createUsers({ body }, res) {
    Users.create(body)
      .then((dbUsersData) => res.json(dbUsersData))
      .catch((err) => res.status(400).json(err));
  },

  // Get All Users
  getAllUsers(req, res) {
    Users.find({})
      // populate users thoughts
      .populate({ path: "thoughts", select: "-__v" })
      // populate user friends
      .populate({ path: "friends", select: "-__v" })
      .select("-__v")
      .then((dbUsersData) => res.json(dbUsersData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a single user by ID
