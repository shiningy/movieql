import { GraphQLServer } from 'graphql-yoga';
import { resolvers } from "./src/graphql/resolvers";
console.log('hi');

const server = new GraphQLServer({  
  typeDefs: "./src/graphql/schema.graphql",
  resolvers
});

server.start(() => console.log('Server is running on localhost:4000'));