"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptData = exports.generateUID = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const config_1 = __importDefault(require("../../../config/config"));
function generateUID(userRole) {
    const uidLength = 20;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uid;
    if (userRole === "customer") {
        uid = "c00";
    }
    else if (userRole === "hotelOwner") {
        uid = "ho00";
    }
    for (let i = 0; i < uidLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uid += characters.charAt(randomIndex);
    }
    return uid;
}
exports.generateUID = generateUID;
function encryptData(user) {
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
    const encryptedData = crypto_js_1.default.AES.encrypt(JSON.stringify(authData), String(config_1.default.jwt_secret)).toString();
    return encryptedData;
}
exports.encryptData = encryptData;
// ! Do Not remove it
// export function decryptData(
//   encryptedData: string,
//   secretKey: string,
// ): IUserWithoutPassword {
//   const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
//   const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//   return decryptedData as IUserWithoutPassword;
// }
