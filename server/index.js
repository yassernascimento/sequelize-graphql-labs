const { ApolloServer, gql } = require("apollo-server");
const schema = require("./schema");

const typeDefs = gql`
  ${schema}
`;

const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers });

exports.start = async () => {
  const { url } = await server.listen();
  console.log(`Server ready at ${url}`);
};
