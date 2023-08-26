// Resolvers define how to fetch the types defined in your schema.
import { reviews, games, authors } from "../mocks/videogames.js";
export const videoGamesResolvers = {
    Query: {
        reviewById: (_, args) => reviews.find((review) => review.id === args.id),
        reviews: () => reviews,
        gameById: (_, args) => games.find((game) => game.id === args.id),
        games: () => games,
        authors: () => authors,
    },
};
