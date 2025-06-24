import { IBusinessProfile } from "./hotelTypes";
import { IReservations } from "./reservationTypes";

export type statusEnums = "pending" | "onboard" | "completed" | "cancelled";

export interface IBooking {
  _id: string;
  userName: string;
  userPhone: string;
  email: string;
  reservationId: string | IReservations;
  hotelId: string | IBusinessProfile;
  reservedDays: number;
  startingDate: Date;
  expireDate: Date;
  reservationPrice: number;
  status: statusEnums;
  isAsGuest: boolean;
  createdAt: string;
  updatedAt: string;
}
