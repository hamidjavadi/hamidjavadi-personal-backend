import { config } from '../../config';
import mongoose from 'mongoose';

const mongooseConnection = mongoose.connection;

mongooseConnection.on(
  'error',
  console.error.bind(console, 'connection error: ')
);

mongooseConnection.once('open', () =>
  console.log('Connection stablished successfully')
);

mongoose.connect(config.database.connectionString);

export { mongooseConnection };
