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

export const BookingService = {
  bookReservation,
};
