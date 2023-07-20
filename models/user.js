import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a username'],
    },
    email: {
      type: String,
      required: [true, 'Please provide a email'],
      unique: [true, 'Email is already in use'],
    },
    // password: {
    //   type: String,
    //   required: [true, 'Please provide a password'],
    // },
    image: {
      type: String,
    },
    // provider: String,
    // accessToken: String,
    // accessTokenExpiry: Date,
    // refreshToken: String,
    // refreshTokenExpiry: Date,
  },
  { versionKey: false, timestamps: true }
);

const User = models.User || model('users', UserSchema);
export default User;
