import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query {
    user {
      _id
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($_id: ID!) {
    products(ID: $_id) {
      _id
      flavor
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      flavor
      description
      price
      image
      category {
        name
      }
    }
  }
`;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

export const QUERY_ORDER = gql`
  query Query($id: ID!) {
    order(_id: $id) {
      _id
      purchaseDate
      products {
        _id
        flavor
        toppings
        description
        image
        quantity
        price
        size
      }
    }
  }
`;
