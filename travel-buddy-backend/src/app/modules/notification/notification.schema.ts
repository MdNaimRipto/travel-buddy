import { Schema, model } from "mongoose";
import { INotification } from "./notification.interface";

const notificationSchema = new Schema<INotification>({
  receiverId: {
    type: String,
    required: true,
  },
  message: { type: String, required: true },
});

export const Notification = model<INotification>(
  "Notification",
  notificationSchema,
);
