import { model, Schema } from "mongoose";
import { IBusinessProfile } from "./businessProfile.interface";
import {
  AreasConstant,
  DestinationsConstant,
} from "./businessProfile.constant";

export const businessProfileSchema = new Schema<IBusinessProfile>(
  {
    hotelId: {
      type: String,
      required: true,
      unique: true,
    },
    hotelOwnerId: { type: String, required: true, index: true, unique: true },
    hotelName: { type: String, required: true },
    totalRating: { type: Number, required: true, default: 0, min: 0, max: 5 },
    startingPrice: { type: Number, required: true, default: 0, min: 0 },
    hotelLocation: {
      street: { type: String, required: true },
      area: { type: String, enum: AreasConstant, required: true },
      destination: {
        type: String,
        enum: DestinationsConstant,
        required: true,
        index: true,
      },
      coordinates: {
        latitude: { type: String, required: true },
        longitude: { type: String, required: true },
      },
    },
    hotelImages: [{ type: String, required: true }],
    totalReservations: { type: Number, required: true, min: 0, default: 0 },
    amenities: [{ type: String, required: true }],
    description: { type: String, required: true },
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
