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
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

export interface ICheckUserExists {
  authMethod: linkedProvidersEnums;
  email: string;
}

export interface IUserWithoutPassword {
  _id: string;
  userName: string;
  email: string;
  contactNumber: string;
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
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthUser {
  token: string;
  userData: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUpdatePassword {
  userId: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IForgetPasswordValidator {
  email: string;
}

export interface IUpdatePasswordValidator {
  email: string;
  password: string;
}
