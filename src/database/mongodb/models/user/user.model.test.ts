import mongoose, { HydratedDocument } from 'mongoose';
import { encrypt } from '@utils/encryptor';
import { IUser, UserModel, UserRole, UserStatus } from './user.model';
import { testConfig } from '@mongoDbTestConfig';

beforeAll(async () => {
  await mongoose.connect(testConfig.database.connectionString);
});

afterEach(async () => {
  // const { connection } = mongoose;
});

afterAll(async () => {
  const { connection } = mongoose;
  await connection.dropCollection('users');
  await connection.close();
});

describe('Mongoose User Model:', () => {
  let userId: mongoose.Types.ObjectId | null = null;
  let user: HydratedDocument<IUser>;

  test('Insert a new user document', async () => {
    user = new UserModel({
      name: 'Name test',
      family: 'Family test',
      email: 'test@server.com',
      password: await encrypt('password test'),
      image_url: 'Image test',
      role: UserRole.USER,
      status: UserStatus.ACTIVE,
    });

    await user.save();
    userId = user._id;

    expect(user._id).toBeDefined();
  });

  test('Select the user document', async () => {
    const user = await UserModel.findById(userId);
    expect(user!.name).toBe('Name test');
  });

  test('Update the user document', async () => {

    await UserModel.updateOne({
      name: 'Name test'
    }, {
      name: 'Name updated'
    });

    const user = await UserModel.findById(userId);
    expect(user!.name).toBe('Name updated');

  });

  test('Delete the user document', async () => {

    await UserModel.deleteOne({
      name: 'Name updated'
    });

    const user = await UserModel.findById(userId);
    expect(user).toBe(null);

  });

});
