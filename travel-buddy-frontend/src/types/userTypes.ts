export type IUserRoleEnums = "hotelOwner" | "customer" | "admin";
export type linkedProvidersEnums = "CUSTOM" | "FACEBOOK" | "TWITTER" | "GOOGLE";

export interface IUserRegister {
  userName: string;
  email: string;
  contactNumber: string;
  password: string;
  role: IUserRoleEnums;
}

export interface IUser {
  userName: string;
  email: string;
  contactNumber: string;
  password: string;
  profileImage: string;
  role: IUserRoleEnums;
  uid: string;
  linkedProviders: Array<linkedProvidersEnums>;
  location: {
    street: string;
    city: string;
    district: string;
    country: string;
  };
  createdAt: string;
}
