import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ReviewsService } from "./reviews.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

// Add Review
const addReview = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;

  const result = await ReviewsService.addReview(payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Review Added Successfully",
    data: result,
  });
});

// Get Review's
const getReviews = catchAsync(async (req: Request, res: Response) => {
  const reservationId = req.headers["reservation-id"];

  const result = await ReviewsService.getReviews(reservationId as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reviews Retrieved Successfully",
    data: result,
  });
});

export const ReviewsController = {
  addReview,
  getReviews,
};
