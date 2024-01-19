import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AdminService } from "./admin.service";
import httpStatus from "http-status";

const getDashboardInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getDashboardInfo();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Dashboard Info Retrieved Successfully",
    data: result,
  });
});

const getAllOwners = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAllOwners();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "HotelOwners Retrieved Successfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAllCustomers();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Customers Retrieved Successfully",
    data: result,
  });
});

const getAllReservations = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAllReservations();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservations Retrieved Successfully",
    data: result,
  });
});

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAllBookings();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookings Retrieved Successfully",
    data: result,
  });
});

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAllReviews();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reviews Retrieved Successfully",
    data: result,
  });
});

const getAllReports = catchAsync(async (req: Request, res: Response) => {
  const reservationId = req.headers["reservation-id"];
  const result = await AdminService.getAllReports(reservationId as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reports Retrieved Successfully",
    data: result,
  });
});

export const AdminController = {
  getDashboardInfo,
  getAllOwners,
  getAllCustomers,
  getAllReservations,
  getAllBookings,
  getAllReviews,
  getAllReports,
};
