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
      latitude: string;
      longitude: string;
    };
  };
  totalReservations: number;
  hotelImages: string[];
  amenities: string[];
  description: string;
}

export interface IHotelsFilter {
  searchTerm?: string;
  hotelName?: string;
  area?: string;
  destination?: string;
  totalRating?: string;
  startingPrice?: string;
}

export interface IUpdateBusinessProfile {
  hotelId: string;
  ownerId: string;
  updateData: Partial<IBusinessProfile>;
}

// export interface IUpdateProfileImages {
//   hotelId: string;
//   img: string;
//   imgNo: number;
// }

// export interface IUploadNewImage {
//   hotelId: string;
//   img: string;
// }
