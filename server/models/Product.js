const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  flavor: {
    type: String,
    required: true,
    trim: true,
  },
  toppings: {
    type: String,
    trim: true,
  },
  sizes: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trime: true,
  },
  reviews: [reviewsSchema],
});

const Product = model("Product", productSchema);

module.exports = Product;
