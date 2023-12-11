export interface IBusinessProfile {
  hotelId: string;
  hotelOwnerId: string;
  hotelName: string;
  hotelLocation: string;
  totalReservations: number;
  hotelImages: string[];
  reservationsLeft: number;
}

export interface IUpdateBusinessProfile {
  hotelId: string;
  ownerId: string;
  updateData: Partial<IBusinessProfile>;
}

export interface IUpdateProfileImages {
  hotelId: string;
  img: string;
  imgNo: number;
}

export interface IUploadNewImage {
  hotelId: string;
  img: string;
}
