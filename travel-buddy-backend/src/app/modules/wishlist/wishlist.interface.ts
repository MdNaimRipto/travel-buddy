import { Types } from "mongoose";
import { IReservations } from "../hotels/reservations/reservations.interface";

export interface IWishlist {
  userId: string;
  reservationId: Types.ObjectId | IReservations;
}

export interface IDeleteWishlist {
  userId: string;
  wishlistId: string;
}
