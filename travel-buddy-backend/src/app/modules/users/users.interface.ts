export interface IUser {
  userName: string;
  email: string;
  contactNumber: string;
  profileImage: string;
  password: string;
  role: "hotelOwner" | "customer";
  uid: string;
  Location: {
    street: string;
    city: string;
    district: string;
    country: string;
  };
}

export interface IAutUser {
  token: string;
  userData: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IForgetPasswordValidator {
  email: string;
}

export interface IUpdatePasswordValidator {
  email: string;
  password: string;
}
