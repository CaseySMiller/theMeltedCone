const db = require('../config/connection');
const { User, Product } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');

db.once('open', async () => {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Product.create(productSeeds);

    for (let i = 0; i < reviewSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Product.create(reviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
