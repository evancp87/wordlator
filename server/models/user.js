const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  user_email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
        throw new Error("Email is not valid.");
      }
    },
  },
  user_password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (
        !value.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        )
      ) {
        throw new Error("Email is not valid.");
      }
    },
  },
  games_played: {
    type: Number,
    required: false,
  },
  games_won: {
    type: Number,
    required: false,
  },
  current_streak: {
    type: Number,
    required: false,
  },
  max_streak: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

module.export = User;
