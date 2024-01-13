import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookingService } from "./booking.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

// Book Reservation
const bookedReservation = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;

  const result = await BookingService.bookReservation(payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservation Booked Successfully",
    data: result,
  });
});

export const BookingController = {
  bookedReservation,
};
