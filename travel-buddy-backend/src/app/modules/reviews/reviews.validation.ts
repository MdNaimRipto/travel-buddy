import { z } from "zod";
import { RatingEnums } from "./reviews.constant";

const reviewZodSchema = z.object({
  body: z.object({
    reservationId: z.string({
      required_error: "Reservation Id Required",
    }),
    userId: z.string({
      required_error: "User Id Required",
    }),
    rating: z.enum([...RatingEnums] as [string, ...string[]], {
      required_error: "Rating is Required",
    }),
    review: z.string({
      required_error: "Review Is Required",
    }),
  }),
});

export const ReviewsValidation = {
  reviewZodSchema,
};
