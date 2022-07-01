import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { config } from './config';
import MongoDatabase from './mongo-db/mongodb';
import schema from './schema';

const expressServer = express();

expressServer.get('/', (req, res) => {
  getData();
  res.send('hello from simple server :)');
});

const getData = async function () {
  const database = new MongoDatabase();
  const result = await database.select(
    'items',
    { title: 'Todo 3' },
    { title: 1 }
  );
  await result.forEach((item) => console.log(item));
};

expressServer.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default expressServer;
