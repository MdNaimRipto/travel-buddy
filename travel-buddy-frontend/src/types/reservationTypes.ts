import { IBusinessProfile } from "./hotelTypes";

export type ReservationsType = "Single" | "Couple" | "Family";
export type ReservationsClass = "First" | "Second" | "Third";
export type ReservationStatus = "Booked" | "Available" | "Blocked";

export type IReservations = {
  profileId: string;
  hotelId: string | Partial<IBusinessProfile>;
  reservationId: string;
  reservationType: ReservationsType;
  reservationClass: ReservationsClass;
  name: string;
  price: number;
  discount: number;
  location: {
    street: string;
    area: string;
    destination: string;
  };
  totalReservations: number;
  reservationsLeft: number;
  status: ReservationStatus;
  description: string;
  features: string[];
  additionalFacilities: string[];
  images: string[];
  rating: {
    total: number;
    rating: number;
  };
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
};
