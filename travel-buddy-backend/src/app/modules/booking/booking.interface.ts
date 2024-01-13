export interface IBooking {
  userId: string;
  reservationId: string;
  reservedDays: number;
  startingDate: string;
  expireDate: string;
  reservationPrice: number;
}
