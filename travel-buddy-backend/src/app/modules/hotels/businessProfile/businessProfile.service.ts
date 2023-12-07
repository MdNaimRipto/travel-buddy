import httpStatus from "http-status";
import ApiError from "../../../../errors/ApiError";
import {
  IBusinessProfile,
  IUpdateProfileImages,
  IUploadNewImage,
} from "./businessProfile.interface";
import { BusinessProfile } from "./businessProfile.schema";
import { generateHotelId } from "./businessProfile.utils";

const createProfile = async (
  payload: IBusinessProfile,
): Promise<IBusinessProfile> => {
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

  payload.reservationsLeft = totalReservations;

  const result = await BusinessProfile.create(payload);
  return result;
};

const updateProfileImages = async (
  payload: IUpdateProfileImages,
): Promise<IBusinessProfile | null> => {
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

const uploadNewImage = async (
  payload: IUploadNewImage,
): Promise<IBusinessProfile | null> => {
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
  updateProfileImages,
  uploadNewImage,
};
