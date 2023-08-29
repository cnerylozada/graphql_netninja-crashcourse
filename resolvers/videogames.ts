// Resolvers define how to fetch the types defined in your schema.
import { reviews, games, authors } from "../mocks/videogames.js";

export const videogamesResolvers = {
  Game: {
    reviews: (parent: { id: string }) =>
      reviews.filter((_) => _.game_id === parent.id),
  },
  Author: {
    reviews: (parent: { id: string }) =>
      reviews.filter((_) => _.author_id === parent.id),
  },
  Query: {
    reviewById: (_, args: { id: string }) =>
      reviews.find((review) => review.id === args.id),
    reviews: () => reviews,
    gameById: (_, args: { id: string }) =>
      games.find((game) => game.id === args.id),
    games: () => games,
    authors: () => authors,
  },
};
