import mongoose, { Document, model, Model, Schema} from 'mongoose';

export enum UserRole {
  'ADMIN',
  'USER',
}

export enum UserStatus {
  'ACTIVE',
  'SUSPEND',
  'PENDING',
  'BANNED',
}

export interface IUser extends Document {
  name: { type: String },
  family: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image_url: { type: String },
  role: {
    type: String,
    enum: UserRole
  },
  status: {
    type: String,
    enum: UserStatus
  },
  last_login_at: { type: Date },
}

const userSchema = new Schema(
  {
    name: { type: String },
    family: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image_url: { type: String },
    role: {
    type: String,
    enum: UserRole
  },
  status: {
    type: String,
    enum: UserStatus
  },
  last_login_at: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const UserModel:Model<IUser> = model<IUser>('User', userSchema);
