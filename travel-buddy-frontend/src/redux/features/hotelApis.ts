import { apiConfig } from "@/configs/apiConfig";
import { hotelApiSlice } from "../apis/hotelApiSlice";
import { IBusinessProfile } from "@/types/hotelTypes";

const hotelApis = hotelApiSlice.injectEndpoints({
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
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
    //
    // * Get Hotel Details
    //
    getHotelDetails: builder.query({
      query: ({ hotelId, token }: { token: string; hotelId: string }) => ({
        url: `${apiConfig.HOTEL.BUSINESS_PROFILE.GET_DETAILS}/${hotelId}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useUploadHotelDetailsMutation, useGetHotelDetailsQuery } =
  hotelApis;
