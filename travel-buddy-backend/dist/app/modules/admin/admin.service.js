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
exports.AdminService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const booking_schema_1 = require("../booking/booking.schema");
const reservations_schema_1 = require("../hotels/reservations/reservations.schema");
const report_schema_1 = require("../report/report.schema");
const reviews_schema_1 = require("../reviews/reviews.schema");
const users_schema_1 = require("../users/users.schema");
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../../config/config"));
const getDashboardInfo = (token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const totalUsers = yield users_schema_1.Users.countDocuments();
    const totalOwners = yield users_schema_1.Users.countDocuments({ role: "hotelOwner" });
    const totalCustomers = yield users_schema_1.Users.countDocuments({ role: "customer" });
    const totalBookings = yield booking_schema_1.Booking.countDocuments();
    const totalOnboardBookings = yield booking_schema_1.Booking.countDocuments({
        status: "onboard",
    });
    const totalSuccessfulBookings = yield booking_schema_1.Booking.countDocuments({
        status: "completed",
    });
    const totalCancelledBookings = yield booking_schema_1.Booking.countDocuments({
        status: "cancelled",
    });
    const totalReviews = yield reviews_schema_1.Reviews.countDocuments();
    const totalPositiveReviews = yield reviews_schema_1.Reviews.countDocuments({
        rating: "positive",
    });
    const totalNegativeReviews = yield reviews_schema_1.Reviews.countDocuments({
        rating: "negative",
    });
    const bookingInfoOutput = [];
    const bookingsInfo = yield booking_schema_1.Booking.find();
    for (let i = 0; i < bookingsInfo.length; i++) {
        const { expireDate } = bookingsInfo[i];
        const totalBooking = yield booking_schema_1.Booking.countDocuments({ expireDate });
        const totalSuccess = yield booking_schema_1.Booking.countDocuments({
            expireDate,
            status: "completed",
        });
        const totalCancelled = yield booking_schema_1.Booking.countDocuments({
            expireDate,
            status: "cancelled",
        });
        const existingBooking = bookingInfoOutput.find(booking => booking.checkoutDate === expireDate);
        if (existingBooking) {
            // If bookingDate is already in the output, update the totals
            existingBooking.totalBooking = totalBooking;
            existingBooking.totalSuccess = totalSuccess;
            existingBooking.totalCancelled = totalCancelled;
        }
        else {
            // If bookingDate is not already in the output, add a new entry
            bookingInfoOutput.push({
                checkoutDate: expireDate,
                totalBooking: totalBooking,
                totalSuccess: totalSuccess,
                totalCancelled,
            });
        }
    }
    const dashboardInfo = {
        totalUsers,
        totalOwners,
        totalCustomers,
        totalBookings,
        totalOnboardBookings,
        totalSuccessfulBookings,
        totalCancelledBookings,
        totalReviews,
        totalPositiveReviews,
        totalNegativeReviews,
        bookingsInfo: bookingInfoOutput,
    };
    return dashboardInfo;
});
const getAllOwners = (paginationOptions, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const andConditions = [];
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const query = Object.assign({ role: "hotelOwner" }, checkAndCondition);
    const owners = yield users_schema_1.Users.find(query)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield users_schema_1.Users.countDocuments({ role: "hotelOwner" });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: owners,
    };
});
const getAllCustomers = (paginationOptions, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const andConditions = [];
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const query = Object.assign({ role: "customer" }, checkAndCondition);
    const owners = yield users_schema_1.Users.find(query)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield users_schema_1.Users.countDocuments({ role: "customer" });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: owners,
    };
});
const getAllReservations = (paginationOptions, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const andConditions = [];
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const result = yield reservations_schema_1.Reservations.find(checkAndCondition)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield reservations_schema_1.Reservations.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getAllBookings = (paginationOptions, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const andConditions = [];
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const result = yield booking_schema_1.Booking.find(checkAndCondition)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield booking_schema_1.Booking.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getAllReviews = (paginationOptions, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const andConditions = [];
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const result = yield reviews_schema_1.Reviews.find(checkAndCondition)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield reviews_schema_1.Reviews.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getAllReports = (paginationOptions, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const andConditions = [];
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelpers_1.calculatePaginationFunction)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const checkAndCondition = (andConditions === null || andConditions === void 0 ? void 0 : andConditions.length) > 0 ? { $and: andConditions } : {};
    const result = yield report_schema_1.Report.find(checkAndCondition)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield report_schema_1.Report.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getReportsCount = (reservationId, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const count = yield report_schema_1.Report.countDocuments({ reservationId });
    return count;
});
const blockReservation = (reservationId, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const isReservationExists = yield reservations_schema_1.Reservations.findOne({ reservationId });
    if (!isReservationExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Reservation Doesn't Exists!");
    }
    if (isReservationExists.status === "Blocked") {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Reservation Already Blocked");
    }
    isReservationExists.status = "Blocked";
    const result = yield reservations_schema_1.Reservations.findOneAndUpdate({ reservationId }, isReservationExists, {
        new: true,
    });
    return result;
});
exports.AdminService = {
    getDashboardInfo,
    getAllOwners,
    getAllCustomers,
    getAllReservations,
    getAllBookings,
    getAllReviews,
    getAllReports,
    getReportsCount,
    blockReservation,
};
