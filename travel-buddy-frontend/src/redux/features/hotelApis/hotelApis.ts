import { apiConfig } from "@/configs/apiConfig";
import { IBusinessProfile, IHotelFilters } from "@/types/hotelTypes";
import { apiSlice } from "../../apis/apiSlice";
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
    getAllHotels: builder.query({
      query: (data: IHotelFilters) => {
        console.log({ data });
        const queryParameters = new URLSearchParams();
        if (data.searchTerm) {
          queryParameters.append("searchTerm", data.searchTerm);
        }
        if (data.sortBy) {
          queryParameters.append("sortBy", data.sortBy);
        }
        if (data.sortOrder) {
          queryParameters.append("sortOrder", data.sortOrder);
        }
        if (data.page) {
          queryParameters.append("page", data.page);
        }
        if (data.limit) {
          queryParameters.append("limit", data.limit);
        }
        if (data.destination) {
          queryParameters.append("destination", data.destination);
        }
        if (data.startingPrice) {
          queryParameters.append("startingPrice", data.startingPrice);
        }
        if (data.area) {
          queryParameters.append("area", data.area);
        }
        if (data.hotelName) {
          queryParameters.append("hotelName", data.hotelName);
        }
        if (data.totalRating) {
          if (Array.isArray(data.totalRating)) {
            data.totalRating.forEach(cls =>
              queryParameters.append("totalRating", cls)
            );
          } else {
            queryParameters.append("totalRating", data.totalRating);
          }
        }
        return `${
          apiConfig.HOTEL.BUSINESS_PROFILE.GET_ALL
        }?${queryParameters.toString()}`;
      },
      providesTags: [],
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
  useGetAllHotelsQuery,
  useGetBusinessProfileQuery,
} = hotelApis;
