import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query{
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
