import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
