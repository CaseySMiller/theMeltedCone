const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String!
    lastName: String!
    email: String!
    password: String!
    orders: [Order]
    reviews: [Review]
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    flavor: String
    toppings: String
    description: String
    image: String
    quantity: Int
    price: Float
    size: String
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
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
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(prducts: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(prducts: [ID]!): Order
    addReview(
      userId: ID!
      productId: ID!
      reviewAuthor: String
      reviewText: String!
    ): User
    addComment(reviewId: ID!, commentText: String!): Review
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    removeReview(reviewId: String!): User
    removeComment(reviewId: ID!, commentId: ID!): Review
  }
`;

module.exports = typeDefs;

// users: [User];
