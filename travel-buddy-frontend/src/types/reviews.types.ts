export type reviewForEnumTypes = "HOTEL" | "RESERVATION";

export interface IReviews {
  userName: string;
  email: string;
  profileImage: string;
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
