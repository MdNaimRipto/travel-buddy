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
exports.WishlistService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const users_schema_1 = require("../users/users.schema");
const reservations_schema_1 = require("../hotels/reservations/reservations.schema");
const wishlist_schema_1 = require("./wishlist.schema");
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../../config/config"));
const wishlistReservation = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const { userId, reservationId } = payload;
    const isUserExists = yield users_schema_1.Users.findOne({ _id: userId });
    if (!isUserExists) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "User Doesn't Exist's");
    }
    const isReservationExists = yield reservations_schema_1.Reservations.findOne({
        _id: reservationId,
    });
    if (!isReservationExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Reservation Doesn't Exist's");
    }
    const result = yield wishlist_schema_1.Wishlist.create(payload);
    return result;
});
const getUserWishlistedReservations = (userId, paginationOptions, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const andConditions = [];
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const query = Object.assign({ userId }, checkAndCondition);
    const result = yield wishlist_schema_1.Wishlist.find(query)
        .populate({
        path: "reservationId",
    })
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield wishlist_schema_1.Wishlist.countDocuments({ userId });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const deleteWishlist = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const { userId, wishlistId } = payload;
    const isUserExists = yield users_schema_1.Users.findOne({ _id: userId });
    if (!isUserExists) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "User Doesn't Exist's");
    }
    const isWishlistExists = yield wishlist_schema_1.Wishlist.findOne({ _id: wishlistId, userId });
    if (!isWishlistExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Reservation Doesn't Exists on Wishlist");
    }
    if (isWishlistExists.userId !== userId) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Permission Denied! Please Try Again.");
    }
    const result = yield wishlist_schema_1.Wishlist.findOneAndDelete({ _id: wishlistId }, {
        new: true,
    });
    return result;
});
exports.WishlistService = {
    wishlistReservation,
    getUserWishlistedReservations,
    deleteWishlist,
};
