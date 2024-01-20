import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { Users } from "../users/users.schema";
import { IBooking } from "./booking.interface";
import { Reservations } from "../hotels/reservations/reservations.schema";
import { Booking } from "./booking.schema";
import mongoose from "mongoose";

const bookReservation = async (payload: IBooking): Promise<IBooking> => {
  const { userId, reservationId } = payload;

  const isUserExists = await Users.findOne({ _id: userId });
  if (!isUserExists) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User Doesn't Exist");
  }

  if (isUserExists.role === "hotelOwner") {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Permission Denied! Please Try With Another account",
    );
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
    userId,
    reservationId,
    status: { $in: ["pending", "ongoing"] },
  });
  if (isReservationBooked) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Reservation Already Booked and Cannot Booked Before it's End",
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

    await session.commitTransaction();
    session.endSession();

    return bookedReservation[0] as unknown as IBooking;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getUsersReservations = async (userId: string): Promise<IBooking[]> => {
  const bookings = await Booking.find({ userId }).populate({
    path: "reservationId",
  });
  return bookings;
};

const cancelBooking = async (bookingId: string): Promise<IBooking | null> => {
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
