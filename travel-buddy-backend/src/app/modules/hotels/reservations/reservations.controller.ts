import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import { ReservationsService } from "./reservations.service";
import sendResponse from "../../../../shared/sendResponse";
import httpStatus from "http-status";

// Upload Reservation
const uploadReservation = catchAsync(async (req: Request, res: Response) => {
  const { ...reservationInfo } = req.body;

  const result = await ReservationsService.uploadReservation(reservationInfo);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservation Created Successfully",
    data: result,
  });
});

// Get All Reservations
const getAllReservations = catchAsync(async (req: Request, res: Response) => {
  const result = await ReservationsService.getAllReservations();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservations Retrieved Successfully",
    data: result,
  });
});

// Get Reservations by HotelID
const getReservationsByHotelId = catchAsync(
  async (req: Request, res: Response) => {
    const { hotel_id } = req.headers;

    const result = await ReservationsService.getReservationsByHotelId(
      hotel_id as string,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Reservations Retrieved Successfully",
      data: result,
    });
  },
);

// Get Reservation Details
const getReservationDetails = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await ReservationsService.getReservationDetails(
      id as string,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Reservations Retrieved Successfully",
      data: result,
    });
  },
);

// Update Reservations
const updateReservations = catchAsync(async (req: Request, res: Response) => {
  const { ...updateData } = req.body;

  const result = await ReservationsService.updateReservations(updateData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservations Updated Successfully",
    data: result,
  });
});

export const ReservationsController = {
  uploadReservation,
  getAllReservations,
  getReservationsByHotelId,
  getReservationDetails,
  updateReservations,
};
