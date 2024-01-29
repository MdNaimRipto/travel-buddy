import httpStatus from "http-status";
import ApiError from "../../../../errors/ApiError";
import {
  IBusinessProfile,
  IUpdateBusinessProfile,
  IUpdateProfileImages,
  IUploadNewImage,
} from "./businessProfile.interface";
import { BusinessProfile } from "./businessProfile.schema";
import { generateHotelId } from "./businessProfile.utils";
import { jwtHelpers } from "../../../../helpers/jwtHelpers";
import config from "../../../../config/config";
import { Secret } from "jsonwebtoken";

// * Create Business Profile
const createProfile = async (
  payload: IBusinessProfile,
  token: string,
): Promise<IBusinessProfile> => {
  jwtHelpers.jwtVerify(token, config.jwt_secret as Secret);

  const { hotelOwnerId, totalReservations, hotelImages } = payload;

  const isExists = await BusinessProfile.findOne({ hotelOwnerId });
  if (isExists) {
    throw new ApiError(httpStatus.CONFLICT, "Hotel Already exists!");
  }

  if (hotelImages.length < 5) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Minimum 5 images required!");
  }

  if (totalReservations < 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Reservations cannot be less than 0",
    );
  }

  const hotelId = generateHotelId();
  payload.hotelId = hotelId;

  const result = await BusinessProfile.create(payload);
  return result;
};

// * Get Business Profile
const getBusinessProfile = async (
  id: string,
  token: string,
): Promise<IBusinessProfile | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_secret as Secret);

  const result = await BusinessProfile.findOne({ hotelOwnerId: id });
  if (!result) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Business Profile not found! please create one first",
    );
  }
  return result;
};

// * Update Business Profile
const updateBusinessProfile = async (
  payload: IUpdateBusinessProfile,
  token: string,
): Promise<IBusinessProfile | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_secret as Secret);

  const { hotelId: id, ownerId, updateData } = payload;

  const { hotelId, hotelImages, hotelOwnerId, totalReservations } = updateData;

  const isHotelExists = await BusinessProfile.findOne({ hotelId: id });
  if (!isHotelExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hotel Profile Not Found!");
  }

  if (isHotelExists.hotelOwnerId !== ownerId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Something Went Wrong! Please Try Again",
    );
  }

  if (
    hotelId !== undefined ||
    hotelOwnerId !== undefined ||
    hotelImages !== undefined
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Something Went Wrong! Please Try Again",
    );
  }

  if (totalReservations) {
    const previousTotalReservation = isHotelExists.totalReservations;
    if (previousTotalReservation > totalReservations) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Total Reservation Cannot be Less Then Previous Total Reservations!",
      );
    }
  }

  const result = await BusinessProfile.findOneAndUpdate(
    { hotelId: id },
    updateData,
    {
      new: true,
    },
  );
  return result;
};

// * Update Profile Images
const updateProfileImages = async (
  payload: IUpdateProfileImages,
  token: string,
): Promise<IBusinessProfile | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_secret as Secret);

  const { img, imgNo, hotelId } = payload;

  const hotel = await BusinessProfile.findOne({ hotelId });
  if (!hotel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hotel Not Found");
  }

  if (imgNo < 0 || imgNo > hotel.hotelImages.length) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Image slot Does Not Exists!");
  }

  hotel.hotelImages[imgNo] = img;

  const result = await BusinessProfile.findOneAndUpdate({ hotelId }, hotel, {
    new: true,
  });
  return result;
};

// * Upload New Image
const uploadNewImage = async (
  payload: IUploadNewImage,
  token: string,
): Promise<IBusinessProfile | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_secret as Secret);

  const { hotelId, img } = payload;

  const hotel = await BusinessProfile.findOne({ hotelId });
  if (!hotel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hotel Not Found");
  }

  hotel.hotelImages.push(img);

  const result = await BusinessProfile.findOneAndUpdate({ hotelId }, hotel, {
    new: true,
  });
  return result;
};

export const BusinessProfileService = {
  createProfile,
  getBusinessProfile,
  updateBusinessProfile,
  updateProfileImages,
  uploadNewImage,
};
