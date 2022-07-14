const { gpl } = require("apollo-server-express");

const typeDefs = gpl`
type User {
    _id: ID
    username: String
    email: String
    password: String
    products: [Product]!
    reviews: [Review]
}

type Product {
    _id: ID
    flavor: String
    toppings: String
    sizes: String
    category: String
    }

type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    createdAt: String
    }

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
    }

type Auth {
    token: ID!
    user: User
    }

type Query {
    users: [User]
    user:(username: String!): User
    products: [Product]
    product(productId:)
    }

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(userId: ID!, productId: ID!, reviewAuthor: String reviewText: String!): User
    addComment(reviewId: ID!, commentText: String!): Review
    removeReview(reviewId: String!): User
    removeComment(reviewId: ID!, commentId: ID!): Review
    }`;

module.exports = typeDefs;
