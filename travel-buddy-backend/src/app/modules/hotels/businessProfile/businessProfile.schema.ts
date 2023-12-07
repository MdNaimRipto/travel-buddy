import { model, Schema } from "mongoose";
import { IBusinessProfile } from "./businessProfile.interface";

export const businessProfileSchema = new Schema<IBusinessProfile>(
  {
    hotelId: { type: "string", required: true },
    hotelOwnerId: { type: "string", required: true },
    hotelName: { type: "string", required: true },
    hotelLocation: { type: "string", required: true },
    hotelImages: [{ type: "string", required: true }],
    totalReservations: { type: "number", required: true },
    reservationsLeft: { type: "number", required: true },
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
