import { Types } from "mongoose";

export interface IBooking {
  userId: string;
  reservationId: Types.ObjectId;
  reservedDays: number;
  startingDate: string;
  expireDate: string;
  reservationPrice: number;
  status: "pending" | "onboard" | "completed" | "cancelled";
}
