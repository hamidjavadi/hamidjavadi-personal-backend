import mongoose from 'mongoose';

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

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    family: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image_url: { type: String },
    role: { type: UserRole },
    status: { type: UserStatus },
    last_login_at: { type: Date },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model('User', userSchema);

export { UserModel };
