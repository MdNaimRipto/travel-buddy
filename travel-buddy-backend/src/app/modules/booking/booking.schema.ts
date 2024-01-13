import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>({
  userId: { type: String, required: true },
  reservationId: { type: String, required: true },
  reservedDays: { type: Number, required: true },
  startingDate: { type: String, required: true },
  expireDate: { type: String, required: true },
  reservationPrice: { type: Number, required: true },
});

export const Booking = model<IBooking>("Booking", bookingSchema);
