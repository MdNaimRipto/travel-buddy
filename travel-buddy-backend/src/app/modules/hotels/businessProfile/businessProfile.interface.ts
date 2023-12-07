export interface IBusinessProfile {
  hotelId: string;
  hotelOwnerId: string;
  hotelName: string;
  hotelLocation: string;
  totalReservations: number;
  hotelImages: [string];
  reservationsLeft: number;
}
