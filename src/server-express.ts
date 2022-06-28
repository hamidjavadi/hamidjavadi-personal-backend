import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const expressServer = express();

expressServer.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

expressServer.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default expressServer;
