import { model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  bio?: string;
  image: string;
  location?: string;
  portfolio?: string;
  reputation?: number;
}
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    bio: { type: String },
    image: { type: String, required: true },
    location: { type: String },
    portfolio: { type: String },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = models?.User || model<IUser>("User", userSchema);

export default User;
