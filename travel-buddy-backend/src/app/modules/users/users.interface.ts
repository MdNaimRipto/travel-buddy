export interface IUser {
  userName: string; // Any
  email: string; // Any
  contactNumber: string; // Any
  password: string; // Have to take on Provider Login
  profileImage: string; // Any
  role: "hotelOwner" | "customer"; // Have to take on Provider Login
  uid: string; // Any
  // Need After Registration
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
