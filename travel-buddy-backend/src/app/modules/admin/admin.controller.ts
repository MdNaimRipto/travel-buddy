import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AdminService } from "./admin.service";
import httpStatus from "http-status";
import pick from "../../../shared/shared";
import { paginationFields } from "../../../constants/pagination.constant";

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
  const options = pick(req.query, paginationFields);
  const result = await AdminService.getAllOwners(options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "HotelOwners Retrieved Successfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const result = await AdminService.getAllCustomers(options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Customers Retrieved Successfully",
    data: result,
  });
});

const getAllReservations = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const result = await AdminService.getAllReservations(options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservations Retrieved Successfully",
    data: result,
  });
});

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const result = await AdminService.getAllBookings(options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookings Retrieved Successfully",
    data: result,
  });
});

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const result = await AdminService.getAllReviews(options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reviews Retrieved Successfully",
    data: result,
  });
});

const getAllReports = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const result = await AdminService.getAllReports(options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reports Retrieved Successfully",
    data: result,
  });
});

const getReportsCount = catchAsync(async (req: Request, res: Response) => {
  const reservationId = req.headers["reservation-id"];

  const result = await AdminService.getReportsCount(reservationId as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reports Count Retrieved Successfully",
    data: result,
  });
});

const blockReservation = catchAsync(async (req: Request, res: Response) => {
  const { reservationId } = req.body;

  const result = await AdminService.blockReservation(reservationId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservation Blocked Successfully",
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
  getReportsCount,
  blockReservation,
};
