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
exports.AdminController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const admin_service_1 = require("./admin.service");
const http_status_1 = __importDefault(require("http-status"));
const shared_1 = __importDefault(require("../../../shared/shared"));
const pagination_constant_1 = require("../../../constants/pagination.constant");
const verifyAuthToken_1 = require("../../../util/verifyAuthToken");
const getDashboardInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield admin_service_1.AdminService.getDashboardInfo(token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Dashboard Info Retrieved Successfully",
        data: result,
    });
}));
const getAllOwners = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = (0, shared_1.default)(req.query, pagination_constant_1.paginationFields);
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield admin_service_1.AdminService.getAllOwners(options, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "HotelOwners Retrieved Successfully",
        data: result,
    });
}));
const getAllCustomers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = (0, shared_1.default)(req.query, pagination_constant_1.paginationFields);
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield admin_service_1.AdminService.getAllCustomers(options, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Customers Retrieved Successfully",
        data: result,
    });
}));
const getAllReservations = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = (0, shared_1.default)(req.query, pagination_constant_1.paginationFields);
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield admin_service_1.AdminService.getAllReservations(options, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Reservations Retrieved Successfully",
        data: result,
    });
}));
const getAllBookings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = (0, shared_1.default)(req.query, pagination_constant_1.paginationFields);
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield admin_service_1.AdminService.getAllBookings(options, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bookings Retrieved Successfully",
        data: result,
    });
}));
const getAllReviews = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = (0, shared_1.default)(req.query, pagination_constant_1.paginationFields);
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield admin_service_1.AdminService.getAllReviews(options, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Reviews Retrieved Successfully",
        data: result,
    });
}));
const getAllReports = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = (0, shared_1.default)(req.query, pagination_constant_1.paginationFields);
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield admin_service_1.AdminService.getAllReports(options, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Reports Retrieved Successfully",
        data: result,
    });
}));
const getReportsCount = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reservationId = req.headers["reservation-id"];
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield admin_service_1.AdminService.getReportsCount(reservationId, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Reports Count Retrieved Successfully",
        data: result,
    });
}));
const blockReservation = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { reservationId } = req.body;
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield admin_service_1.AdminService.blockReservation(reservationId, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Reservation Blocked Successfully",
        data: result,
    });
}));
exports.AdminController = {
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
