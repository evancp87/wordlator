const User = require("../../models/user");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// registers user with app
const registerUser = async (req, res) => {
  const { user_email, user_password, user_name } = req.body;

  let user = await User.findOne({ user_email });
  if (user) {
    return res.status(400).json("An account with this email already exists");
  } else {
    try {
      user = new User(req.body);
      user.user_password = await bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.user_password, salt, async (err, hash) => {
          if (err) throw err;
          user.user_password = hash;
          await user.save();
          const token = jwt.sign(
            { user_id: user._id },
            process.env.TOKEN_SECRET
          );
          res.send({ token });
        });
      });
    } catch (err) {
      res.status(500).send("Something went wrong");
      console.log("error:", err);
    }
  }
};

// login for user
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.user_email,
      password: req.body.user_password,
    });

    const accessToken = jwt.sign(
      JSON.stringify(user),
      process.env.TOKEN_SECRET
    );

    if (!user) {
      res.status(400).send("no user found with those credentials");
    }

    const matchFound = await bcrypt.compare(
      req.body.user_password,
      req.body.user_email
    );

    if (matchFound) {
      res.json({ accessToken: accessToken });
    } else {
      res.json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).send("Something went wrong, try again");
  }
};

// updates user details in settings
const updateUser = async (req, res) => {
  try {
    await User.findOneAndUpdate({
      email: req.body.user_email,
      password: req.body.user_password,
    });
  } catch (err) {
    console.error(err);
  }
};

// deletes user and their account
const deleteUser = async (req, res) => {
  try {
    await User.findOneAndDelete({
      email: req.body.user_email,
      password: req.body.user_password,
    });

    const matchFound = await bcrypt.compare(
      req.body.user_password,
      req.body.user_email
    );

    if (!matchFound) {
      res.status(400).send("invalid user credentials");
    }
    const { user_password, ...rest } = user.toObject();
    return res.send(rest);
  } catch (err) {
    console.error(err);
  }
};
// TODO: review and either add or delete
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    // process.env.SECRET,
    process.env.TOKEN_SECRET,
    { expiresIn: "24h" }
  );
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
