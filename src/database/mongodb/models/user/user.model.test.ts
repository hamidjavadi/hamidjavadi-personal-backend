import mongoose, { HydratedDocument } from 'mongoose';
import { encrypt } from '@utils/encryptor';
import {
  IUser,
  UserModel,
  UserRole,
  UserStatus,
  userSchema,
} from './user.model';
import { testConfig } from '@mongoDbTestConfig';
import { v4 as UUID4 } from 'uuid';

beforeAll(async () => {
  await mongoose.connect(testConfig.database.connectionString);
});

afterEach(async () => {});

afterAll(async () => {
  const { connection } = mongoose;
  await connection.dropCollection('users');
  await connection.close();
});

describe('Mongoose => User schema structure:', () => {
  test('Should have specified 9 feilds', () => {
    expect(userSchema.paths.uuid).toBeDefined();
    expect(userSchema.paths.name).toBeDefined();
    expect(userSchema.paths.family).toBeDefined();
    expect(userSchema.paths.email).toBeDefined();
    expect(userSchema.paths.password).toBeDefined();
    expect(userSchema.paths.image_url).toBeDefined();
    expect(userSchema.paths.role).toBeDefined();
    expect(userSchema.paths.status).toBeDefined();
    expect(userSchema.paths.last_login_at).toBeDefined();
    expect(userSchema.paths.last_login_at).toBeDefined();
  });
});

describe('Mongoose => User model CRUD:', () => {
  let userId: mongoose.Types.ObjectId | null = null;
  let user: HydratedDocument<IUser>;

  test('Insert a new user document', async () => {
    user = new UserModel({
      uuid: UUID4(),
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
    await UserModel.updateOne(
      {
        name: 'Name test',
      },
      {
        name: 'Name updated',
      }
    );

    const user = await UserModel.findById(userId);
    expect(user!.name).toBe('Name updated');
  });

  test('Delete the user document', async () => {
    await UserModel.deleteOne({
      name: 'Name updated',
    });

    const user = await UserModel.findById(userId);
    expect(user).toBe(null);
  });
});
