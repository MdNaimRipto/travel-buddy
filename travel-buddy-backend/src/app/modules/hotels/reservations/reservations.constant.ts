import {
  ReservationsClass,
  ReservationsType,
  ReservationStatus,
} from "./reservations.interface";

export const ReservationsTypeConstant: ReservationsType[] = [
  "Single",
  "Couple",
  "Family",
];

export const ReservationsClassConstant: ReservationsClass[] = [
  "Standard",
  "Deluxe",
  "Executive",
  "Suite",
  "Presidential",
];

export const ReservationsStatusConstant: ReservationStatus[] = [
  "Available",
  "Booked",
  "Blocked",
];

export const ReservationFeaturesConstant: string[] = [
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
];

export const ReservationSearchableFields = [
  "name",
  "reservationType",
  "reservationClass",
  "location.destination",
  "location.area",
  "location.street",
];

export const ReservationFilterableFields = [
  "searchTerm",
  "name",
  "reservationType",
  "reservationClass",
  "area",
  "destination",
  "rating",
  "price",
];
