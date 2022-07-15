const mongoose = require("mongoose");

const { Schema } = require("mongoose");

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
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  size: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
    trim: true,
  },
  reviews: [reviewsSchema],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
