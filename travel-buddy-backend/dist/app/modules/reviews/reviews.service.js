"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const users_schema_1 = require("../users/users.schema");
const reservations_schema_1 = require("../hotels/reservations/reservations.schema");
const booking_schema_1 = require("../booking/booking.schema");
const reviews_schema_1 = require("./reviews.schema");
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../../config/config"));
const addReview = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const { userId, reservationId } = payload;
    const isUserExists = yield users_schema_1.Users.findOne({ _id: userId });
    if (!isUserExists) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "User Dose not Exists!");
    }
    const isReservationExists = yield reservations_schema_1.Reservations.findOne({
        _id: reservationId,
    });
    if (!isReservationExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Reservation Doesn't Exists!");
    }
    const isBookedReservationExists = yield booking_schema_1.Booking.findOne({
        userId,
        reservationId,
        status: "completed",
    });
    if (!isBookedReservationExists) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "User is Not Permitted to Provide a Review");
    }
    const isAlreadyReviewed = yield reviews_schema_1.Reviews.findOne({ userId, reservationId });
    if (isAlreadyReviewed) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Already Reviewed This Reservation!");
    }
    const result = yield reviews_schema_1.Reviews.create(payload);
    return result;
});
const getReviews = (reservationId) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield reviews_schema_1.Reviews.find({ reservationId }).populate({
        path: "userId",
    });
    const totalReviews = yield reviews_schema_1.Reviews.countDocuments();
    const positiveReviews = yield reviews_schema_1.Reviews.countDocuments({ rating: "positive" });
    const negativeReviews = yield reviews_schema_1.Reviews.countDocuments({ rating: "negative" });
    const positivePercent = (positiveReviews / totalReviews) * 100;
    const negativePercent = (negativeReviews / totalReviews) * 100;
    console.log({ positivePercent, negativePercent });
    return {
        reviews,
        positivePercent,
        negativePercent,
    };
});
exports.ReviewsService = {
    addReview,
    getReviews,
};
