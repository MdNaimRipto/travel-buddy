import { Schema, model } from "mongoose";
import { IReview } from "./reviews.interface";
import { RatingEnums } from "./reviews.constant";

const reviewsSchema = new Schema<IReview>({
  reservationId: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  rating: { type: String, enum: RatingEnums, required: true },
  review: { type: String, required: true },
});

export const Reviews = model<IReview>("Reviews", reviewsSchema);
