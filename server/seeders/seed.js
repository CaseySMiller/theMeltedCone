const db = require('../config/connection');
const { User, Product, Reviews } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');

db.once('open', async () => {
    try {
        await Product.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);
        await Product.create(productSeeds);
        const products = Product.find();

        for (let i = 0; i < reviewSeeds.length; i++) {

            //get a random product _id
            const productIndex = math.random * (0 - products.length) + 0;
            const productId = products[productIndex]._id;
            // create a review and link it to a product
            const { _id } = await Reviews.create(reviewSeeds[i]);
            const product = await Product.findOneAndUpdate(
                { _id: productId },
                {
                $addToSet: {
                    reviews: _id,
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
