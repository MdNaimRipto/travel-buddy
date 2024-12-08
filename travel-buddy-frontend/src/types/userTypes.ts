export type userRoleEnums = "hotelOwner" | "customer";
export type linkedProvidersEnums =
  | "CUSTOM"
  | "FACEBOOK"
  | "TWITTER"
  | "INSTAGRAM";

export interface IUser {
  userName: string;
  email: string;
  contactNumber: string;
  password: string;
  profileImage: string;
  role: userRoleEnums;
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
