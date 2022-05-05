// Dependencies
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connecting to routes
app.use(require("./routes"));

// Connecting to database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

// Connecting to server
app.listen(PORT, () =>
  console.log(`😊😊😊 You are connected on localhost:${PORT}😊😊😊`)
);
