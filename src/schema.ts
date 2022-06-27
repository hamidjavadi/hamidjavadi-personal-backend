import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolver";

const typeDefs = `
    type User {
        id: ID
        name: String
        family: String
        email: String
    }    

    type Query {
        profile: User
    }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
