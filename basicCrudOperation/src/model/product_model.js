const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    des: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Products = new mongoose.model("products", productSchema);
module.exports = Products;
