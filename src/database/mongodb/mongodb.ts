import { config } from '../../config';
import mongoose from 'mongoose';

const { connection } = mongoose;

connection.on(
  'error',
  console.error.bind(console, 'connection error: ')
);

connection.once('open', () =>
  console.log('Connection stablished successfully')
);

mongoose.connect(config.database.connectionString);

export { connection as mongooseConnection };
