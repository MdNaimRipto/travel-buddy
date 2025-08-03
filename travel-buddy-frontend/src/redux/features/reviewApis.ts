import { apiConfig } from "@/configs/apiConfig";
import { apiSlice } from "../apis/apiSlice";
import Cookies from "js-cookie";
import { IReviews } from "@/types/reviews.types";

const reviewApis = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //
    // * Add Review
    //
    addReview: builder.mutation({
      query: ({ data }: { data: IReviews }) => ({
        url: apiConfig.REVIEW.ADD,
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
    //
    // Get all reviews
    //
    getReviews: builder.query({
      query: ({ reviewForId }: { reviewForId: string }) => ({
        url: apiConfig.REVIEW.GET + `?reviewForId=${reviewForId}`,
      }),
    }),
    //
    // Get reviews mini count
    //
    getMiniReviewsCount: builder.query({
      query: ({ reviewForId }: { reviewForId: string }) => ({
        url: apiConfig.REVIEW.GET_MINI_COUNT + `?reviewForId=${reviewForId}`,
      }),
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetReviewsQuery,
  useGetMiniReviewsCountQuery,
} = reviewApis;
