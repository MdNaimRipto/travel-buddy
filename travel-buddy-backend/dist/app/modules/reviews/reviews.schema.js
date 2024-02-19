"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = void 0;
const mongoose_1 = require("mongoose");
const reviews_constant_1 = require("./reviews.constant");
const reviewsSchema = new mongoose_1.Schema({
    reservationId: { type: String, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Users" },
    rating: { type: String, enum: reviews_constant_1.RatingEnums, required: true },
    review: { type: String, required: true },
});
exports.Reviews = (0, mongoose_1.model)("Reviews", reviewsSchema);
