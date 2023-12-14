import { model, Schema } from "mongoose";
import { IBusinessProfile } from "./businessProfile.interface";

export const businessProfileSchema = new Schema<IBusinessProfile>(
  {
    hotelId: {
      type: String,
      required: true,
      unique: true,
    },
    hotelOwnerId: { type: String, required: true },
    hotelName: { type: String, required: true },
    hotelLocation: { type: String, required: true },
    hotelImages: [{ type: String, required: true }],
    totalReservations: { type: Number, required: true, min: 0, default: 0 },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const BusinessProfile = model<IBusinessProfile>(
  "BusinessProfile",
  businessProfileSchema,
);
