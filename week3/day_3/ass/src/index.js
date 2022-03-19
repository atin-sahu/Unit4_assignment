const express = require("express");
const app = express();

const userController = require("./controllers/user_controller")
const postController = require("./controllers/post_controller")

app.use(express.json());

app.use("/users",userController);
app.use("/posts",postController);


module.exports = app;