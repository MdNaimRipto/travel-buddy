"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHotelId = void 0;
function generateHotelId() {
    const uidLength = 10;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let hotelId = `hid`;
    for (let i = 0; i < uidLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        hotelId += characters.charAt(randomIndex);
    }
    return hotelId;
}
exports.generateHotelId = generateHotelId;
