import { envConfig } from "@/configs/envConfig";
import CryptoJS from "crypto-js";

export const decryptUser = (user: string) => {
  const secretKey = envConfig.secret_key;
  const bytes = CryptoJS.AES.decrypt(user.toString(), secretKey);
  const userData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return userData;
};
