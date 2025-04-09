import { apiConfig } from "@/configs/apiConfig";
import { apiSlice } from "../apis/apiSlice";
import {
  IDeleteWishlist,
  IWishlist,
  wishlistForEnumTypes,
} from "@/types/wishlist.types";
import Cookies from "js-cookie";

const wishlistApis = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //
    // * Add to Wishlist
    //
    addToWishlist: builder.mutation({
      query: ({ data }: { data: IWishlist }) => ({
        url: apiConfig.WISHLIST.ADD,
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
    // * Is Wishlist Exists?
    //
    isWishlistExists: builder.query({
      query: ({
        userId,
        entityId,
        wishlistFor,
      }: {
        userId: string;
        entityId: string;
        wishlistFor: wishlistForEnumTypes;
      }) => ({
        url:
          apiConfig.WISHLIST.CHECK_STATUS +
          `?userId=${userId}&entityId=${entityId}&wishlistFor=${wishlistFor}`,
      }),
    }),
    //
    // * Remove from wishlist
    //
    removeFromWishlist: builder.mutation({
      query: ({ data }: { data: IDeleteWishlist }) => ({
        url: apiConfig.WISHLIST.DELETE,
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      }),
    }),
    //
    // Get users Wishlist
    //
    getUserWishlist: builder.query({
      query: ({
        userId,
        wishlistFor,
      }: {
        userId: string;
        wishlistFor: wishlistForEnumTypes;
      }) => ({
        url:
          apiConfig.WISHLIST.GET_USER_WISHLIST +
          `?userId=${userId}&wishlistFor=${wishlistFor}`,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useAddToWishlistMutation,
  useIsWishlistExistsQuery,
  useRemoveFromWishlistMutation,
  useGetUserWishlistQuery,
} = wishlistApis;
