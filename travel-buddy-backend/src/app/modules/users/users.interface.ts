export interface IUser {
  userName: string;
  email: string;
  contactNumber: string;
  password: string;
  profileImage: string;
  role: "hotelOwner" | "customer";
  uid: string;
  location: {
    street: string;
    city: string;
    district: string;
    country: string;
  };
}

export interface IUserWithoutPassword {
  _id: string;
  userName: string;
  email: string;
  contactNumber: string;
  profileImage: string;
  role: "hotelOwner" | "customer";
  uid: string;
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

export interface IForgetPasswordValidator {
  email: string;
}

export interface IUpdatePasswordValidator {
  email: string;
  password: string;
}
