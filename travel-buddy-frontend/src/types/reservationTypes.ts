import { IBusinessProfile } from "./hotelTypes";

export type ReservationsType = "Single" | "Couple" | "Family";
export type ReservationsClass =
  | "Standard"
  | "Deluxe"
  | "Executive"
  | "Suite"
  | "Presidential";
export type ReservationStatus = "Booked" | "Available" | "Blocked";

export const ReservationFeaturesConstant = [
  "Free Wi-Fi",
  "Air Conditioning",
  "Private Balcony",
  "Hot Bath Tub",
  "Smart TV",
  "Room Service",
  "Ocean View",
  "24/7 Front Desk",
  "Daily Housekeeping",
  "Kitchenette",
  "In-Room Safe",
  "Complimentary Breakfast",
  "Luxury Bedding",
  "City View",
] as const;

export type ReservationFeature = (typeof ReservationFeaturesConstant)[number];

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
  features: ReservationFeature[];
  additionalFacilities: string[];
  image: string;
  rating: {
    total: number;
    rating: number;
  };
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
};
