import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ReportService } from "./report.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const reportReservation = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;

  const result = await ReportService.reportReservation(payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservation Reported",
    data: result,
  });
});

export const ReportController = {
  reportReservation,
};
