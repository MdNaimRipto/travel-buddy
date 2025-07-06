export interface IBusinessProfile {
  hotelId: string;
  hotelOwnerId: string;
  hotelName: string;
  totalRating: number; // * Will Update while Review and Rating
  startingPrice: number; // * Will Update while Add Reservation
  hotelLocation: {
    street: string; // * Hotel Street
    area: string; // * Hotel Area Ex: Inani Beach
    destination: string; // * Hotel Destination Ex: Cox's Bazar
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  totalReservations: number;
  hotelImage: string;
  amenities: string[];
  description: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  _id?: string;
}

export interface IHotelStatistics {
  totalBookings: number;
  totalCompletedBookings: number;
  totalPendingBookings: number;
  totalOnGoingBookings: number;
  totalCanceledBookings: number;
  totalReviews: number;
  totalPositiveReviews: number;
  totalNegativeReviews: number;
  totalMixedReviews: number;
}
