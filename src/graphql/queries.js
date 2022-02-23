/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getName = /* GraphQL */ `
  query GetName($id: ID!) {
    getName(id: $id) {
      id
      first_name
      last_name
      createdAt
      updatedAt
    }
  }
`;
export const listNames = /* GraphQL */ `
  query ListNames(
    $filter: ModelNameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
