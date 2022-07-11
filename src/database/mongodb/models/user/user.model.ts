import mongoose, { Document, model, Model, Schema } from 'mongoose';

export enum UserRole {
  'ADMIN' = 'ADMIN',
  'USER' = 'USER',
}

export enum UserStatus {
  'ACTIVE' = 'ACTIVE',
  'SUSPEND' = 'SUSPEND',
  'PENDING' = 'PENDING',
  'BANNED' = 'BANNED',
}

export interface IUser extends Document {
  uuid: { type: String; readonly: true; required: true; index: true };
  name: { type: String };
  family: { type: String };
  email: { type: String; required: true };
  password: { type: String; required: true };
  image_url: { type: String };
  role: {
    type: String;
    enum: UserRole;
    default: UserRole.USER;
  };
  status: {
    type: String;
    enum: UserStatus;
    default: UserStatus.PENDING;
  };
  last_login_at: { type: Date };
}

export const userSchema = new Schema(
  {
    uuid: { type: String, readonly: true, required: true, index: true },
    name: { type: String },
    family: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image_url: { type: String },
    role: {
      type: String,
      enum: UserRole,
      default: UserRole.USER,
    },
    status: {
      type: String,
      enum: UserStatus,
      default: UserStatus.PENDING,
    },
    last_login_at: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const UserModel: Model<IUser> = model<IUser>('User', userSchema);
