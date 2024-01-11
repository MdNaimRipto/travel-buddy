import { model, Schema } from "mongoose";
import { IReservations } from "./reservations.interface";
import {
  ReservationsClassConstant,
  ReservationsStatusConstant,
  ReservationsTypeConstant,
} from "./reservations.constant";

export const reservationsSchema = new Schema<IReservations>(
  {
    profileId: { type: String, required: true },
    reservationId: { type: String, required: true, unique: true },
    reservationType: {
      type: String,
      enum: ReservationsTypeConstant,
      required: true,
    },
    reservationClass: {
      type: String,
      enum: ReservationsClassConstant,
      required: true,
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    totalReservations: { type: Number, required: true },
    reservationsLeft: { type: Number, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ReservationsStatusConstant,
      required: true,
      default: "Available",
    },
    images: [{ type: String, required: true, min: 5 }],
    features: [{ type: String, required: true }],
    additionalFacilities: [{ type: String, required: true, default: [] }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Reservations = model<IReservations>(
  "Reservations",
  reservationsSchema,
);
