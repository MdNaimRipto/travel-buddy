import { Types } from "mongoose";
import { IUser } from "../users/users.interface";

export type ratingEnums = "positive" | "negative";

export interface IReview {
  reservationId: string;
  userId: Types.ObjectId | IUser;
  rating: ratingEnums;
  review: string;
}

export interface IGetReviews {
  reviews: IReview[];
  positivePercent: number;
  negativePercent: number;
}
