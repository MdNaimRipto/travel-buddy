import { Types } from "mongoose";
import { IUser } from "../users/users.interface";

export type ratingEnums = "positive" | "negative";

export type reviewForEnumTypes = "HOTEL" | "RESERVATION";

export interface IReview {
  reservationId: string;
  userId: Types.ObjectId | IUser;
  rating: ratingEnums;
  review: string;
}

export interface IReviews {
  userId: Types.ObjectId | Partial<IUser>;
  reviewForId: string;
  reviewFor: reviewForEnumTypes;
  rating: number;
  review: string;
}

export interface IGetMiniReviewsCount {
  totalReviews: number;
  avgRating: number;
}

export interface IGetReviews {
  reviews: IReviews[];
  positivePercent: number;
  negativePercent: number;
  mixedPercent: number;
  totalReviews: number;
  avgRating: number;
}
