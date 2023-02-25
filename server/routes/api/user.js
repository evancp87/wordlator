const express = require("express");
const userLogic = require("../../controllers/api/user-controller");
const user = express.Router();

// register route

user.post("/register", userLogic.registerUser);

// login route

user.post("/login", userLogic.loginUser);

// deletes a user
user.delete("/settings/deleteUser/:_id", userLogic.deleteUser);

// updates user details
user.put("/settings/:_id", userLogic.updateUser);

module.exports = user;
