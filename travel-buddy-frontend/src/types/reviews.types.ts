import { IUser } from "./userTypes";

export type reviewForEnumTypes = "HOTEL" | "RESERVATION";

export interface IReviews {
  userId: string | Partial<IUser>;
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
