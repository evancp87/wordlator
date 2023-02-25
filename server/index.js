const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const routes = require("./routes/api/user");
const authorization = require("./middleware/authorization");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

// Mounting routes in app

app.use(routes);
app.use(authorization);

app.get("/", (req, res) => {
  res.send("This is from index.js");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
