import { gql } from 'graphql-tag';
import { custom } from 'custom-graphql-tag';

/* GraphQL */ `
  fragment UserFields on User {
    firstname
    lastname
  }
`;

gql`
  {
    user {
      ...UserFields
    }
  }
`;

/* MyGraphQL */ `
  fragment SecondUserFields on User {
    firstName
    lastName
  }
`;

custom`
  {
    users {
      ...SecondUserFields
    }
  }
`;
