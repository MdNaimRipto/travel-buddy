import { Types } from "mongoose";
import { IReservations } from "../hotels/reservations/reservations.interface";
import { IUser } from "../users/users.interface";

export interface IReport {
  reservationId: Types.ObjectId | IReservations;
  userId: Types.ObjectId | IUser;
  report: string;
}
