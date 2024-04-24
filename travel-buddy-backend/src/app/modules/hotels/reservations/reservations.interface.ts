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
  location: string;
  totalReservations: number;
  reservationsLeft: number;
  status: ReservationStatus;
  description: string;
  features: string[];
  additionalFacilities: string[];
  images: string[];
};

export interface IReservationFilters {
  searchTerm?: string;
  name?: string;
  reservationType?: ReservationsType;
  reservationClass?: ReservationsClass;
}

export interface IUpdateReservation {
  reservationId: string;
  hotelId: string;
  updateData: Partial<IReservations>;
}

export type IUpdatableArrayKey = "features" | "additionalFacilities" | "images";

export interface IUploadArrayData {
  key: IUpdatableArrayKey;
  reservationId: string;
  data: string;
}

export interface IUpdateArrayData {
  key: IUpdatableArrayKey;
  reservationId: string;
  data: string;
  dataNo: number;
}
