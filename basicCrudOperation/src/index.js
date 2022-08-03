const express = require("express");
const userController = require("./controller/user.controller");
const productController = require("./controller/product_controller");
const app = express();

app.use(express.json());
app.use("/users", userController);
app.use("/products", productController);

module.exports = app;
