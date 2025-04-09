import { IBusinessProfile } from "./hotelTypes";
import { IReservations } from "./reservationTypes";

export type wishlistForEnumTypes = "HOTEL" | "RESERVATION";

export interface IWishlist {
  userId: string;
  reservationId?: string | IReservations;
  hotelId?: string | IBusinessProfile;
  wishlistFor: wishlistForEnumTypes;
}

export interface IDeleteWishlist {
  userId: string;
  wishlistId: string;
}
