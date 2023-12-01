import { model, Schema } from "mongoose";
import { IUser } from "./users.interface";
import bcrypt from "bcrypt";
import config from "../../../config/config";

export const usersSchema = new Schema<IUser>({
  userName: { type: "string", required: true },
  email: { type: "string", required: true, unique: true },
  contactNumber: { type: "string", required: true, unique: true },
  profileImage: {
    type: "string",
    required: true,
    default: "https://i.ibb.co/dcHVrp8/User-Profile-PNG-Image.png",
  },
  password: { type: "string", required: true, unique: true },
  role: { type: "string", required: true },
  uid: { type: "string", required: true, unique: true },
  Location: {
    street: { type: "string", required: true, default: "empty" },
    city: { type: "string", required: true, default: "empty" },
    district: { type: "string", required: true, default: "empty" },
    country: { type: "string", required: true, default: "empty" },
  },
});

usersSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_round));
  next();
});

export const Users = model<IUser>("Users", usersSchema);
