import { apiConfig } from "@/configs/apiConfig";
import { apiSlice } from "../apis/apiSlice";
import Cookies from "js-cookie";

const adminApis = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //
    // * Get Hotel Statistics
    //
    getAdminStatistics: builder.query({
      query: () => ({
        url: `${apiConfig.ADMIN.GET_DASHBOARD_INFO}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
    }),
    //
    // * Get All Users
    //
    getAllUsers: builder.query({
      query: () => ({
        url: `${apiConfig.ADMIN.GET_ALL_USERS + "?limit=null"}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
      providesTags: [],
    }),
    //
    // * Get All Reservations
    //
    getAllReservations: builder.query({
      query: () => ({
        url: `${apiConfig.ADMIN.GET_ALL_RESERVATIONS + "?limit=null"}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
      providesTags: [],
    }), //
    // * Get All Users
    //
    getAllBookings: builder.query({
      query: () => ({
        url: `${apiConfig.ADMIN.GET_ALL_BOOKINGS + "?limit=null"}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
      providesTags: [],
    }),
  }),
});

export const {
  useGetAdminStatisticsQuery,
  useGetAllUsersQuery,
  useGetAllReservationsQuery,
  useGetAllBookingsQuery,
} = adminApis;
