export type ReservationsType = "Single" | "Couple" | "Family";
export type ReservationsClass = "First" | "Second" | "Third";
export type ReservationStatus = "Booked" | "Available" | "Blocked";

export interface IReservation {
  profileId: string;
  reservationId: string;
  reservationType: ReservationsType;
  reservationClass: ReservationsClass;
  name: string;
  price: number;
  location: {
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
} // Have to add : Rating, Total Rated, Discount,
