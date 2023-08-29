import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { videogamesDefs } from "../schemas/videogames.js";
import { videogamesResolvers } from "../resolvers/videogames.js";

const server = new ApolloServer({
  typeDefs: videogamesDefs,
  resolvers: videogamesResolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
