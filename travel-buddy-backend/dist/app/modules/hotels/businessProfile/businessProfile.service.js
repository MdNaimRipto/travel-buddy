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
exports.BusinessProfileService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../../errors/ApiError"));
const businessProfile_schema_1 = require("./businessProfile.schema");
const businessProfile_utils_1 = require("./businessProfile.utils");
const jwtHelpers_1 = require("../../../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../../../config/config"));
// * Create Business Profile
const createProfile = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const { hotelOwnerId, totalReservations, hotelImages } = payload;
    const isExists = yield businessProfile_schema_1.BusinessProfile.findOne({ hotelOwnerId });
    if (isExists) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Hotel Already exists!");
    }
    if (hotelImages.length < 5) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Minimum 5 images required!");
    }
    if (totalReservations < 0) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Reservations cannot be less than 0");
    }
    const hotelId = (0, businessProfile_utils_1.generateHotelId)();
    payload.hotelId = hotelId;
    const result = yield businessProfile_schema_1.BusinessProfile.create(payload);
    return result;
});
// * Get Business Profile
const getBusinessProfile = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const result = yield businessProfile_schema_1.BusinessProfile.findOne({ hotelOwnerId: id });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Business Profile not found! please create one first");
    }
    return result;
});
// * Update Business Profile
const updateBusinessProfile = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const { hotelId: id, ownerId, updateData } = payload;
    const { hotelId, hotelImages, hotelOwnerId, totalReservations } = updateData;
    const isHotelExists = yield businessProfile_schema_1.BusinessProfile.findOne({ hotelId: id });
    if (!isHotelExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Hotel Profile Not Found!");
    }
    if (isHotelExists.hotelOwnerId !== ownerId) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Something Went Wrong! Please Try Again");
    }
    if (hotelId !== undefined ||
        hotelOwnerId !== undefined ||
        hotelImages !== undefined) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Something Went Wrong! Please Try Again");
    }
    if (totalReservations) {
        const previousTotalReservation = isHotelExists.totalReservations;
        if (previousTotalReservation > totalReservations) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Total Reservation Cannot be Less Then Previous Total Reservations!");
        }
    }
    const result = yield businessProfile_schema_1.BusinessProfile.findOneAndUpdate({ hotelId: id }, updateData, {
        new: true,
    });
    return result;
});
// * Update Profile Images
const updateProfileImages = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const { img, imgNo, hotelId } = payload;
    const hotel = yield businessProfile_schema_1.BusinessProfile.findOne({ hotelId });
    if (!hotel) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Hotel Not Found");
    }
    if (imgNo < 0 || imgNo > hotel.hotelImages.length) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Image slot Does Not Exists!");
    }
    hotel.hotelImages[imgNo] = img;
    const result = yield businessProfile_schema_1.BusinessProfile.findOneAndUpdate({ hotelId }, hotel, {
        new: true,
    });
    return result;
});
// * Upload New Image
const uploadNewImage = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwtHelpers_1.jwtHelpers.jwtVerify(token, config_1.default.jwt_secret);
    const { hotelId, img } = payload;
    const hotel = yield businessProfile_schema_1.BusinessProfile.findOne({ hotelId });
    if (!hotel) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Hotel Not Found");
    }
    hotel.hotelImages.push(img);
    const result = yield businessProfile_schema_1.BusinessProfile.findOneAndUpdate({ hotelId }, hotel, {
        new: true,
    });
    return result;
});
exports.BusinessProfileService = {
    createProfile,
    getBusinessProfile,
    updateBusinessProfile,
    updateProfileImages,
    uploadNewImage,
};
