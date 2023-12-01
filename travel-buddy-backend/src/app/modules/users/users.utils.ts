import CryptoJS from "crypto-js";
import config from "../../../config/config";
import { IUserWithoutPassword } from "./users.interface";

export function generateUID(userRole: "hotelOwner" | "customer") {
  const uidLength = 20;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uid;
  if (userRole === "customer") {
    uid = "c#00";
  } else if (userRole === "hotelOwner") {
    uid = "ho#00";
  }

  for (let i = 0; i < uidLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uid += characters.charAt(randomIndex);
  }

  return uid;
}

export function encryptData(user: IUserWithoutPassword) {
  const authData = {
    _id: user._id.toString(),
    userName: user.userName,
    email: user.email,
    contactNumber: user.contactNumber,
    profileImage: user.profileImage,
    role: user.role,
    uid: user.uid,
    location: user.location,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(authData),
    String(config.jwt_secret),
  ).toString();
  return encryptedData;
}

// ! Do Not remove it
// export function decryptData(
//   encryptedData: string,
//   secretKey: string,
// ): IUserWithoutPassword {
//   const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
//   const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//   return decryptedData as IUserWithoutPassword;
// }
