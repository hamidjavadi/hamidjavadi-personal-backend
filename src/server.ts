import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import { resolver } from "./resolver";

const app = express();

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
