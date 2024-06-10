/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateWorkOrder = /* GraphQL */ `
  subscription OnCreateWorkOrder(
    $filter: ModelSubscriptionWorkOrderFilterInput
  ) {
    onCreateWorkOrder(filter: $filter) {
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
export const onUpdateWorkOrder = /* GraphQL */ `
  subscription OnUpdateWorkOrder(
    $filter: ModelSubscriptionWorkOrderFilterInput
  ) {
    onUpdateWorkOrder(filter: $filter) {
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
export const onDeleteWorkOrder = /* GraphQL */ `
  subscription OnDeleteWorkOrder(
    $filter: ModelSubscriptionWorkOrderFilterInput
  ) {
    onDeleteWorkOrder(filter: $filter) {
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
