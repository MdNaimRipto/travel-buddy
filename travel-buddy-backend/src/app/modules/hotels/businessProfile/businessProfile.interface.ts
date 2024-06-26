export interface IBusinessProfile {
  hotelId: string;
  hotelOwnerId: string;
  hotelName: string;
  hotelLocation: {
    area: string;
    destination: string;
  };
  totalReservations: number;
  hotelImages: string[];
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
