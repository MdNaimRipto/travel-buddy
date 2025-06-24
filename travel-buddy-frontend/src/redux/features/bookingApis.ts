import { apiConfig } from "@/configs/apiConfig";
import { apiSlice } from "../apis/apiSlice";
import Cookies from "js-cookie";
import { IBooking } from "@/types/bookingTypes";

const bookingApis = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //
    // * Book Reservation
    //
    bookReservation: builder.mutation({
      query: ({ data }: { data: IBooking }) => ({
        url: apiConfig.BOOKING.BOOK_RESERVATION,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
    //
    // * Get users Reservations
    //
    getUserReservations: builder.query({
      query: ({ email }: { email: string }) => ({
        url:
          apiConfig.BOOKING.GET_USERS_RESERVATIONS +
          `?email=${email}&limit=null`,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
    }),
    //
    // * Cancel Reservation
    //
    cancelReservation: builder.mutation({
      query: ({ bookingId }: { bookingId: string }) => ({
        url: apiConfig.BOOKING.CANCEL + `?bookingId=${bookingId}`,
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
      invalidatesTags: [],
    }),
  }),
});

export const {
  useBookReservationMutation,
  useGetUserReservationsQuery,
  useCancelReservationMutation,
} = bookingApis;
