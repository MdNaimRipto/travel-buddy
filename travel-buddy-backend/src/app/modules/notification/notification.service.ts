import httpStatus from "http-status";
import { Users } from "../users/users.schema";
import ApiError from "../../../errors/ApiError";
import { INotification } from "./notification.interface";
import { Notification } from "./notification.schema";

const sendNotification = async (
  payload: INotification,
): Promise<INotification> => {
  const { receiverId } = payload;

  const isReceiverExists = await Users.findOne({ uid: receiverId });
  if (!isReceiverExists) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Receiver Dose not Exists!");
  }

  const result = await Notification.create(payload);
  return result;
};

const getNotification = async (
  receiverId: string,
): Promise<INotification[]> => {
  const notifications = await Notification.find(
    { receiverId },
    {
      _id: 1,
      message: 1,
    },
  );
  return notifications;
};

const deleteNotification = async (
  notificationId: string,
): Promise<INotification | null> => {
  const result = await Notification.findOneAndDelete(
    { _id: notificationId },
    {
      new: true,
    },
  );

  return result;
};

export const NotificationService = {
  sendNotification,
  getNotification,
  deleteNotification,
};
