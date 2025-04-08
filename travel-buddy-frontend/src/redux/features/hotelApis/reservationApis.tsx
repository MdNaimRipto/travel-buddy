import { apiConfig } from "@/configs/apiConfig";
import { apiSlice } from "../../apis/apiSlice";
import Cookies from "js-cookie";
import { IReservations } from "@/types/reservationTypes";

const reservationApis = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //
    // * Upload Reservation
    //
    uploadReservation: builder.mutation({
      query: ({ data }: { data: IReservations }) => ({
        url: apiConfig.HOTEL.RESERVATIONS.UPLOAD,
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
    getHotelReservations: builder.query({
      query: ({ hotelId }: { hotelId: string }) => ({
        url: `${apiConfig.HOTEL.RESERVATIONS.GET_BY_HOTEL_ID}/${hotelId}`,
      }),
    }),
    //
    // * Get All Reservations
    //
    getAllReservations: builder.query({
      query: () => ({
        url: apiConfig.HOTEL.RESERVATIONS.GET_ALL,
      }),
    }),
    //
    // * Get Reservation By Id
    //
    getReservationById: builder.query({
      query: ({ reservationId }: { reservationId: string }) => ({
        url: `${apiConfig.HOTEL.RESERVATIONS.GET_DETAILS}/${reservationId}`,
      }),
    }),
    //
    // * Update Reservation
    //
    updateReservation: builder.mutation({
      query: ({
        data,
      }: {
        data: {
          reservationId: string;
          hotelId: string;
          updateData: Partial<IReservations>;
        };
      }) => ({
        url: `${apiConfig.HOTEL.RESERVATIONS.UPDATE}`,
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
  }),
});

export const {
  useUploadReservationMutation,
  useGetHotelReservationsQuery,
  useGetAllReservationsQuery,
  useGetReservationByIdQuery,
  useUpdateReservationMutation,
} = reservationApis;
