// Requiring Users Model
const { Users } = require("../models");

const usersController = {
  // Create a new User
  createUsers({ body }, res) {
    Users.create(body)
      .then((dbUsersData) => res.json(dbUsersData))
      .catch((err) => res.status(400).json(err));
  },

