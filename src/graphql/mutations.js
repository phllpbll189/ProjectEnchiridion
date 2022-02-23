/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createName = /* GraphQL */ `
  mutation CreateName(
    $input: CreateNameInput!
    $condition: ModelNameConditionInput
  ) {
    createName(input: $input, condition: $condition) {
      id
      first_name
      last_name
      createdAt
      updatedAt
    }
  }
`;
export const updateName = /* GraphQL */ `
  mutation UpdateName(
    $input: UpdateNameInput!
    $condition: ModelNameConditionInput
  ) {
    updateName(input: $input, condition: $condition) {
      id
      first_name
      last_name
      createdAt
      updatedAt
    }
  }
`;
export const deleteName = /* GraphQL */ `
  mutation DeleteName(
    $input: DeleteNameInput!
    $condition: ModelNameConditionInput
  ) {
    deleteName(input: $input, condition: $condition) {
      id
      first_name
      last_name
      createdAt
      updatedAt
    }
  }
`;
