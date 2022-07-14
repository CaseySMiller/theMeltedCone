const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewsSchema = new Schema({
  reviewText: {
    type: String,
    required: 'You must provide a review text.',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  reviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Reviews = model('Reviews', reviewsSchema);

module.exports = Reviews;