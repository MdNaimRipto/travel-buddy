import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { NotificationService } from "./notification.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const sendNotification = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;

  const result = await NotificationService.sendNotification(payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Notification Sent!",
    data: result,
  });
});

const getNotification = catchAsync(async (req: Request, res: Response) => {
  const receiverId = req.headers["receiver-id"];

  const result = await NotificationService.getNotification(
    receiverId as string,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Notification's Retrieved!",
    data: result,
  });
});

const deleteNotification = catchAsync(async (req: Request, res: Response) => {
  const { notificationId } = req.body;

  const result = await NotificationService.deleteNotification(notificationId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Notification Deleted!",
    data: result,
  });
});

export const NotificationController = {
  sendNotification,
  getNotification,
  deleteNotification,
};
