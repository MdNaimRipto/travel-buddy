import httpStatus from "http-status";
import ApiError from "../../../../errors/ApiError";
import {
  IReservations,
  IUpdateArrayData,
  IUpdateReservation,
} from "./reservations.interface";
import { Reservations } from "./reservations.schema";
import {
  generateReservationsId,
  reservationCreated,
} from "./reservations.utils";
import { BusinessProfile } from "../businessProfile/businessProfile.schema";

const uploadReservation = async (
  payload: IReservations,
): Promise<IReservations> => {
  const { profileId, reservationClass, reservationType, images } = payload;

  const isHotelExists = await BusinessProfile.findOne({ hotelId: profileId });
  if (!isHotelExists) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Hotel Does not Exists! Create Business Profile First.",
    );
  }

  const isExistsReservation = await Reservations.findOne({
    $and: [{ profileId }, { reservationClass }, { reservationType }],
  });
  if (isExistsReservation) {
    throw new ApiError(httpStatus.CONFLICT, "Reservation Already Exists!");
  }

  const reservationsCreated = await reservationCreated(profileId);
  if (
    isHotelExists.totalReservations <= reservationsCreated ||
    isHotelExists.totalReservations < payload.totalReservations
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "No More Reservation Space Left!",
    );
  }

  const reservationId = generateReservationsId();

  const isReservationIdExists = await Reservations.findOne({ reservationId });
  if (isReservationIdExists) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "Something Went Wrong! Please Try Again",
    );
  }

  payload.reservationId = reservationId;

  payload.reservationsLeft = payload.totalReservations;

  if (images.length < 5) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Must Have to Upload 5 or More Images",
    );
  }

  const result = await Reservations.create(payload);

  return result;
};

const getAllReservations = async (): Promise<IReservations[]> => {
  const reservations = await Reservations.find();
  return reservations;
};

const getReservationsByHotelId = async (
  hotel_id: string,
): Promise<IReservations[]> => {
  const reservations = await Reservations.find({ profileId: hotel_id });
  return reservations;
};

const getReservationDetails = async (
  id: string,
): Promise<IReservations | null> => {
  const reservations = await Reservations.findById({ _id: id });
  return reservations;
};

const updateReservations = async (
  payload: IUpdateReservation,
): Promise<IReservations | null> => {
  const { reservationId: id, hotelId, updateData } = payload;
  if (!id || !hotelId || !updateData) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Failed To Update! Please Try Again",
    );
  }

  const {
    profileId,
    reservationClass,
    reservationType,
    images,
    status,
    reservationId,
    features,
    additionalFacilities,
    totalReservations,
    reservationsLeft,
  } = updateData;

  const isReservationExists = await Reservations.findOne({
    reservationId: id,
  });
  if (!isReservationExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Reservation Not found");
  }

  if (hotelId !== isReservationExists.profileId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Unauthorized User! Please Try Again",
    );
  }

  if (
    profileId !== undefined ||
    reservationClass !== undefined ||
    reservationType !== undefined ||
    images !== undefined ||
    status !== undefined ||
    reservationId !== undefined ||
    features !== undefined ||
    additionalFacilities !== undefined ||
    reservationsLeft !== undefined
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Failed To Update! Please Try Again Later",
    );
  }

  const isHotelExists = await BusinessProfile.findOne({ hotelId });

  if (isHotelExists) {
    if (totalReservations) {
      const previousReservationsCount = isReservationExists.totalReservations;
      if (previousReservationsCount > totalReservations) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          "Total Reservation Cannot be Less Then Previous Total Reservations!",
        );
      }

      const previousTotalReservation = isHotelExists.totalReservations;
      const reservationsCreated = await reservationCreated(hotelId);
      if (
        previousTotalReservation <= reservationsCreated ||
        previousTotalReservation < totalReservations
      ) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          "No More Reservation Space Left!",
        );
      }

      const addedTotalReservations =
        totalReservations - previousReservationsCount;
      updateData.reservationsLeft =
        isReservationExists.reservationsLeft + addedTotalReservations;
    }
  }

  const result = await Reservations.findOneAndUpdate(
    { reservationId: id },
    updateData,
    {
      new: true,
    },
  );

  return result;
};

const updateArrayData = async (updateData: IUpdateArrayData) => {};

// Upload New Array Data

// Update Status

export const ReservationsService = {
  uploadReservation,
  getAllReservations,
  getReservationsByHotelId,
  getReservationDetails,
  updateReservations,
};
