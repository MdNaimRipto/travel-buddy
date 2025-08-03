import { Schema, model } from "mongoose";
import { IReviews } from "./reviews.interface";
import { ReviewForEnumTypes } from "./reviews.constant";

const reviewsSchema = new Schema<IReviews>(
  {
    reviewForId: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, required: true },
    profileImage: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
    reviewFor: { type: String, enum: ReviewForEnumTypes, required: true },
  },
  {
    timestamps: true,
  },
);

export const Reviews = model<IReviews>("Reviews", reviewsSchema);
