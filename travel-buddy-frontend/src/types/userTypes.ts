export type IUserRoleEnums = "hotelOwner" | "customer" | "admin";
export type linkedProvidersEnums = "CUSTOM" | "FACEBOOK" | "TWITTER" | "GOOGLE";
export type genderEnums = "MALE" | "FEMALE";

export interface IUserRegister {
  userName: string;
  email: string;
  contactNumber: string;
  password: string;
  role: IUserRoleEnums;
}

export interface IUser {
  _id: string;
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
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
  gender: genderEnums;
  dateOfBirth: {
    date: string;
    month: string;
    year: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface IUpdatePassword {
  userId: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
