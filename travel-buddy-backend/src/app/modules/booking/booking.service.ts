import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { Users } from "../users/users.schema";
import { IBooking } from "./booking.interface";
import { Reservations } from "../hotels/reservations/reservations.schema";
import { Booking } from "./booking.schema";
import mongoose, { SortOrder } from "mongoose";
import { calculatePaginationFunction } from "../../../helpers/paginationHelpers";
import {
  IGenericPaginationResponse,
  IPaginationOptions,
} from "../../../interface/pagination";
import { Secret } from "jsonwebtoken";
import config from "../../../config/config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { BusinessProfile } from "../hotels/businessProfile/businessProfile.schema";
import { sendBookingConfirmation } from "./booking.utils";

const bookReservation = async (payload: IBooking): Promise<IBooking> => {
  const { email, reservationId, hotelId, isAsGuest } = payload;

  if (!isAsGuest) {
    const isUserExists = await Users.findOne({ email });
    if (!isUserExists) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "User Doesn't Exist");
    }
  }

  const isHotelExists = await BusinessProfile.findOne({
    _id: hotelId,
  });
  if (!isHotelExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hotel Does Not Found!");
  }

  const isReservationExists = await Reservations.findOne({
    _id: reservationId,
  });
  if (!isReservationExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Reservation Not Found");
  }

  if (isReservationExists.status === "Blocked") {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Cannot Book a Blocked Reservation",
    );
  }

  const isReservationBooked = await Booking.findOne({
    email,
    reservationId,
    status: { $in: ["pending", "ongoing"] },
  });
  if (isReservationBooked) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "You Have Already Booked and Cannot Book Again Before it's End/Canceled",
    );
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const bookedReservation = await Booking.create([payload], {
      session,
    });

    // Update reservation count and status
    let updatedReservation = await Reservations.findOneAndUpdate(
      { _id: reservationId, reservationsLeft: { $gt: 0 } },
      {
        $inc: { reservationsLeft: -1 },
      },
      { new: true },
    );

    // Check if there are reservations left and update the status
    if (updatedReservation && updatedReservation.reservationsLeft === 0) {
      updatedReservation = await Reservations.findOneAndUpdate(
        { _id: reservationId },
        { $set: { status: "Booked" } },
        { new: true },
      );
    }

    if (!updatedReservation) {
      throw new ApiError(httpStatus.BAD_REQUEST, "No reservations left");
    }

    // Send Confirmation Mail
    await sendBookingConfirmation(payload);

    await session.commitTransaction();
    session.endSession();

    return bookedReservation[0] as unknown as IBooking;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getUsersReservations = async (
  email: string,
  paginationOptions: IPaginationOptions,
  token: string,
): Promise<IGenericPaginationResponse<IBooking[]>> => {
  jwtHelpers.jwtVerify(token, config.jwt_secret as Secret);

  const andConditions: string | any[] = [];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const query = {
    email,
    ...checkAndCondition,
  };

  const bookings = await Booking.find(query)
    .populate({
      path: "reservationId",
    })
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Booking.countDocuments({ email });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: bookings,
  };
};

const cancelBooking = async (
  bookingId: string,
  token: string,
): Promise<IBooking | null> => {
  jwtHelpers.jwtVerify(token, config.jwt_secret as Secret);

  const booking = await Booking.findOne({ _id: bookingId });

  if (!booking) {
    throw new ApiError(httpStatus.NOT_FOUND, "Booking Not Found");
  }

  if (booking?.status === "cancelled") {
    throw new ApiError(httpStatus.BAD_REQUEST, "Booking Already Cancelled");
  }

  if (booking.status === "completed" || booking.status === "onboard") {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Cannot Cancel an Onboard or Completed Booking!",
    );
  }

  booking.status = "cancelled";

  const result = await Booking.findOneAndUpdate({ _id: bookingId }, booking, {
    new: true,
  });

  return result;
};

export const BookingService = {
  bookReservation,
  getUsersReservations,
  cancelBooking,
};
