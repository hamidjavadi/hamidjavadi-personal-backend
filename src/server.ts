import apolloServer from "./server-apollo";
import { config } from "./config";
import expressServer from "./server-express";

if (config.useExpress) {
  expressServer.listen(4000, () => {
    console.log(`Express GraphQL server is running... \nhttp://localhost:4000`);
  });
} else {
  apolloServer.listen().then(() => {
    console.log(`Apollo GraphQL server is running... \nhttp://localhost:4000`);
  });
}
