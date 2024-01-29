import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AdminService } from "./admin.service";
import httpStatus from "http-status";
import pick from "../../../shared/shared";
import { paginationFields } from "../../../constants/pagination.constant";
import { verifyAuthToken } from "../../../util/verifyAuthToken";

const getDashboardInfo = catchAsync(async (req: Request, res: Response) => {
  const token = verifyAuthToken(req);
  const result = await AdminService.getDashboardInfo(token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Dashboard Info Retrieved Successfully",
    data: result,
  });
});

const getAllOwners = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const token = verifyAuthToken(req);
  const result = await AdminService.getAllOwners(options, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "HotelOwners Retrieved Successfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const token = verifyAuthToken(req);
  const result = await AdminService.getAllCustomers(options, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Customers Retrieved Successfully",
    data: result,
  });
});

const getAllReservations = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const token = verifyAuthToken(req);
  const result = await AdminService.getAllReservations(options, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservations Retrieved Successfully",
    data: result,
  });
});

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const token = verifyAuthToken(req);
  const result = await AdminService.getAllBookings(options, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookings Retrieved Successfully",
    data: result,
  });
});

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const token = verifyAuthToken(req);
  const result = await AdminService.getAllReviews(options, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reviews Retrieved Successfully",
    data: result,
  });
});

const getAllReports = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const token = verifyAuthToken(req);
  const result = await AdminService.getAllReports(options, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reports Retrieved Successfully",
    data: result,
  });
});

const getReportsCount = catchAsync(async (req: Request, res: Response) => {
  const reservationId = req.headers["reservation-id"];
  const token = verifyAuthToken(req);

  const result = await AdminService.getReportsCount(
    reservationId as string,
    token,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reports Count Retrieved Successfully",
    data: result,
  });
});

const blockReservation = catchAsync(async (req: Request, res: Response) => {
  const { reservationId } = req.body;
  const token = verifyAuthToken(req);

  const result = await AdminService.blockReservation(reservationId, token);

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
