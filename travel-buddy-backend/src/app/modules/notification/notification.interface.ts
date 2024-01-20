export type NotificationEnums = "normal" | "warning";

export interface INotification {
  receiverId: string;
  type: NotificationEnums;
  message: string;
}
