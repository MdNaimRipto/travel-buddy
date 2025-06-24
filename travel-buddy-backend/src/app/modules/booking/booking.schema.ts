import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";
import { StatusEnums } from "./booking.constant";

const bookingSchema = new Schema<IBooking>(
  {
    email: { type: String, required: true },
    userName: { type: String, required: true },
    userPhone: { type: String, required: true },
    reservationId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Reservations",
    },
    hotelId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "BusinessProfile",
    },
    reservedDays: { type: Number, required: true },
    startingDate: { type: Date, required: true },
    expireDate: { type: Date, required: true },
    reservationPrice: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: StatusEnums,
      default: "pending",
    },
    isAsGuest: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

export const Booking = model<IBooking>("Booking", bookingSchema);
