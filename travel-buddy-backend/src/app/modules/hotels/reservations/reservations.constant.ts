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
  "First",
  "Second",
  "Third",
];

export const ReservationsStatusConstant: ReservationStatus[] = [
  "Available",
  "Booked",
  "Blocked",
];
