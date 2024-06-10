/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      from
      subject
      summary
      relatedLocation
      related
      date
      seen
      replied
      sfid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      from
      subject
      summary
      relatedLocation
      related
      date
      seen
      replied
      sfid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      from
      subject
      summary
      relatedLocation
      related
      date
      seen
      replied
      sfid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWorkOrder = /* GraphQL */ `
  mutation CreateWorkOrder(
    $input: CreateWorkOrderInput!
    $condition: ModelWorkOrderConditionInput
  ) {
    createWorkOrder(input: $input, condition: $condition) {
      id
      sfID
      requestDate
      scheduledDate
      completedDate
      locationName
      address
      city
      state
      postalCode
      country
      latitude
      longitude
      link
      owner
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWorkOrder = /* GraphQL */ `
  mutation UpdateWorkOrder(
    $input: UpdateWorkOrderInput!
    $condition: ModelWorkOrderConditionInput
  ) {
    updateWorkOrder(input: $input, condition: $condition) {
      id
      sfID
      requestDate
      scheduledDate
      completedDate
      locationName
      address
      city
      state
      postalCode
      country
      latitude
      longitude
      link
      owner
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWorkOrder = /* GraphQL */ `
  mutation DeleteWorkOrder(
    $input: DeleteWorkOrderInput!
    $condition: ModelWorkOrderConditionInput
  ) {
    deleteWorkOrder(input: $input, condition: $condition) {
      id
      sfID
      requestDate
      scheduledDate
      completedDate
      locationName
      address
      city
      state
      postalCode
      country
      latitude
      longitude
      link
      owner
      type
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
