// Requiring Mongoose
const { Schema, model } = require("mongoose");

const UsersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Using REGEX to validate email
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Total count of friends
UsersSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Creating  the Users model using the Users Schema
const Users = model("Users", UsersSchema);

// Exporting Users module
module.exports = Users;
