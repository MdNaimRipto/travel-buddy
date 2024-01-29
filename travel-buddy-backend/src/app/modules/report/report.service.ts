import httpStatus from "http-status";
import { Users } from "../users/users.schema";
import { IReport } from "./report.interface";
import ApiError from "../../../errors/ApiError";
import { Reservations } from "../hotels/reservations/reservations.schema";
import { Booking } from "../booking/booking.schema";
import { Report } from "./report.schema";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config/config";
import { Secret } from "jsonwebtoken";

const reportReservation = async (
  payload: IReport,
  token: string,
): Promise<IReport> => {
  jwtHelpers.jwtVerify(token, config.jwt_secret as Secret);

  const { reservationId, userId } = payload;

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
      "User is Not Permitted to Report This Reservation",
    );
  }

  const result = await Report.create(payload);
  return result;
};

export const ReportService = {
  reportReservation,
};
