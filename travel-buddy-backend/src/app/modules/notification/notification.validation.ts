import { z } from "zod";

const notificationZodSchema = z.object({
  body: z.object({
    receiverId: z.string({
      required_error: "Receiver Id Required",
    }),
    message: z.string({
      required_error: "Message Required",
    }),
  }),
});

export const NotificationValidation = {
  notificationZodSchema,
};
