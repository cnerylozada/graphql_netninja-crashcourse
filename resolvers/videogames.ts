// Resolvers define how to fetch the types defined in your schema.
import _db from "../mocks/videogames.js";

export const videogamesResolvers = {
  Game: {
    reviews: (parent: { id: string }) =>
      _db.reviews.filter((_) => _.game_id === parent.id),
  },
  Author: {
    reviews: (parent: { id: string }) =>
      _db.reviews.filter((_) => _.author_id === parent.id),
  },
  Query: {
    reviewById: (_, args: { id: string }) =>
      _db.reviews.find((review) => review.id === args.id),
    reviews: () => _db.reviews,
    gameById: (_, args: { id: string }) =>
      _db.games.find((game) => game.id === args.id),
    games: () => _db.games,
    authors: () => _db.authors,
  },
  Mutation: {
    removeGame: (_, args: { gameId: string }) => {
      return _db.games.filter((_) => _.id !== args.gameId);
    },
    addGame: (_, args: { game: { title: string; platform: string[] } }) => {
      const newGame = { ...args.game, id: "999" };
      _db.games.push(newGame);
      return newGame;
    },
    updateGame: (
      _,
      args: { gameId: string; edits: { title: string; platform: string[] } }
    ) => {
      _db.games = _db.games.map((_) => {
        return _.id === args.gameId ? { ..._, ...args.edits } : _;
      });
      return _db.games.find((_) => _.id === args.gameId);
    },
  },
};
