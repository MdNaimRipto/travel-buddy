export type ReservationsType = "Single" | "Couple" | "Family";
export type ReservationsClass = "First" | "Second" | "Third";
export type ReservationStatus = "Booked" | "Available" | "Blocked";

export type IReservations = {
  profileId: string;
  reservationId: string;
  reservationType: ReservationsType;
  reservationClass: ReservationsClass;
  name: string;
  price: number;
  totalReservations: number;
  reservationsLeft: number;
  status: ReservationStatus;
  description: string;
  features: string[];
  additionalFacilities: string[];
  images: string[];
};

export interface IUpdateReservation {
  reservationId: string;
  hotelId: string;
  updateData: Partial<IReservations>;
}

export interface IUpdateArrayData {
  reservationId: string;
  data: string;
  dataNo: number;
}
