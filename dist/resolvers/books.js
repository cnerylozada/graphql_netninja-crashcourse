// Resolvers define how to fetch the types defined in your schema.
import { reviews, games, authors } from "../mocks/videogames.js";
export const videoGamesResolvers = {
    Query: {
        reviews: () => reviews,
        games: () => games,
        authors: () => authors,
    },
};
