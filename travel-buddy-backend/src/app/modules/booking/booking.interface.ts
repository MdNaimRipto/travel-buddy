import { Types } from "mongoose";

export type statusEnums = "pending" | "onboard" | "completed" | "cancelled";

export interface IBooking {
  userId: string;
  reservationId: Types.ObjectId;
  reservedDays: number;
  startingDate: string;
  expireDate: string;
  reservationPrice: number;
  status: statusEnums;
}
