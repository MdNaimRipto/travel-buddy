import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { Users } from "../users/users.schema";
import { IGetReviews, IReview } from "./reviews.interface";
import { Reservations } from "../hotels/reservations/reservations.schema";
import { Booking } from "../booking/booking.schema";
import { Reviews } from "./reviews.schema";

const addReview = async (payload: IReview): Promise<IReview> => {
  const { userId, reservationId } = payload;

  const isUserExists = await Users.findOne({ _id: userId });
  if (!isUserExists) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User Dose not Exists!");
  }

  const isReservationExists = await Reservations.findOne({
    _id: reservationId,
  });
  if (!isReservationExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Reservation Doesn't Exists!");
  }

  const isBookedReservationExists = await Booking.findOne({
    userId,
    reservationId,
    status: "completed",
  });
  if (!isBookedReservationExists) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "User is Not Permitted to Provide a Review",
    );
  }

  const isAlreadyReviewed = await Reviews.findOne({ userId, reservationId });
  if (isAlreadyReviewed) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Already Reviewed This Reservation!",
    );
  }

  const result = await Reviews.create(payload);
  return result;
};

const getReviews = async (reservationId: string): Promise<IGetReviews> => {
  const reviews = await Reviews.find({ reservationId });

  const totalReviews = await Reviews.countDocuments();

  const positiveReviews = await Reviews.countDocuments({ rating: "positive" });
  const negativeReviews = await Reviews.countDocuments({ rating: "negative" });

  const positivePercent = (positiveReviews / totalReviews) * 100;
  const negativePercent = (negativeReviews / totalReviews) * 100;

  console.log({ positivePercent, negativePercent });

  return {
    reviews,
    positivePercent,
    negativePercent,
  };
};

export const ReviewsService = {
  addReview,
  getReviews,
};
