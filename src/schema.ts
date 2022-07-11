import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolver";
import typeDefs from "./type.defs";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
