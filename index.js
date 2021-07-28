const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
