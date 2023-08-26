export const videoGamesDefs = `#graphql
  # This "Book" type defines the queryable fields for every book in our data source.
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    reviewById(id: ID!): Review
    reviews: [Review]
    gameById(id:ID!): Game
    games: [Game]
    authors: [Author]
  }
`;
