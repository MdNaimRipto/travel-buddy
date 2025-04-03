import { apiConfig } from "@/configs/apiConfig";
import { IBusinessProfile } from "@/types/hotelTypes";
import { apiSlice } from "../apis/apiSlice";
import Cookies from "js-cookie";

const hotelApis = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //
    // * Upload Hotel Details
    //
    uploadHotelDetails: builder.mutation({
      query: ({ data }: { data: IBusinessProfile }) => ({
        url: apiConfig.HOTEL.BUSINESS_PROFILE.CREATE,
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
    // * Get Hotel Statistics
    //
    getHotelStatistics: builder.query({
      query: ({ hotelId }: { hotelId: string }) => ({
        url: `${apiConfig.HOTEL.BUSINESS_PROFILE.GET_STATISTICS}/${hotelId}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
    }),
    //
    // * Get Hotel Business Profile
    //
    getBusinessProfile: builder.query({
      query: ({ hotelId }: { hotelId: string }) => ({
        url: `${apiConfig.HOTEL.BUSINESS_PROFILE.GET_PROFILE}/${hotelId}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
    }),
    //
    // * Get Hotel Details
    //
    getHotelDetails: builder.query({
      query: ({ hotelId }: { hotelId: string }) => ({
        url: `${apiConfig.HOTEL.BUSINESS_PROFILE.GET_DETAILS}/${hotelId}`,
      }),
    }),
  }),
});

export const {
  useUploadHotelDetailsMutation,
  useGetHotelDetailsQuery,
  useGetHotelStatisticsQuery,
  useGetBusinessProfileQuery,
} = hotelApis;
