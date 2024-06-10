/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getWorkOrder = /* GraphQL */ `
  query GetWorkOrder($id: ID!) {
    getWorkOrder(id: $id) {
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
export const listWorkOrders = /* GraphQL */ `
  query ListWorkOrders(
    $filter: ModelWorkOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
