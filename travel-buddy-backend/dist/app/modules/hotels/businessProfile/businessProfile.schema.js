"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessProfile = exports.businessProfileSchema = void 0;
const mongoose_1 = require("mongoose");
exports.businessProfileSchema = new mongoose_1.Schema({
    hotelId: {
        type: String,
        required: true,
        unique: true,
    },
    hotelOwnerId: { type: String, required: true },
    hotelName: { type: String, required: true },
    hotelLocation: {
        area: { type: String, required: true },
        destination: { type: String, required: true },
    },
    hotelImages: [{ type: String, required: true }],
    totalReservations: { type: Number, required: true, min: 0, default: 0 },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.BusinessProfile = (0, mongoose_1.model)("BusinessProfile", exports.businessProfileSchema);
