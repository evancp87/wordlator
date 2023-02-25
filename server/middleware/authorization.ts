const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

module.exports = (res, req, next) => {
  const { authorization } = req.body;
  // authorization === bearer

  if (!authorization) {
    return res.status(401).send({ error: "Invalid authorization" });
  }

  const token = authorization.replace("Bearer", "");
  jwt.verify(token, process.env.SECRET_TOKEN, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "you must be logged in" });
    } else {
      const { userId } = payload;
      const user = await User.findById(userId);
      req.user = user;
    }
  });
};
