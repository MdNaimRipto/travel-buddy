import { apiConfig } from "@/configs/apiConfig";
import { apiSlice } from "../../apis/apiSlice";
import Cookies from "js-cookie";
import { IReservationFilters, IReservations } from "@/types/reservationTypes";

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
      query: (data: IReservationFilters) => {
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
        if (data.price) {
          queryParameters.append("price", data.price);
        }
        if (data.area) {
          queryParameters.append("area", data.area);
        }
        if (data.reservationType) {
          if (Array.isArray(data.reservationType)) {
            data.reservationType.forEach(type =>
              queryParameters.append("reservationType", type)
            );
          } else {
            queryParameters.append("reservationType", data.reservationType);
          }
        }
        if (data.reservationClass) {
          if (Array.isArray(data.reservationClass)) {
            data.reservationClass.forEach(cls =>
              queryParameters.append("reservationClass", cls)
            );
          } else {
            queryParameters.append("reservationClass", data.reservationClass);
          }
        }
        if (data.name) {
          queryParameters.append("name", data.name);
        }
        if (data.rating) {
          if (Array.isArray(data.rating)) {
            data.rating.forEach(cls => queryParameters.append("rating", cls));
          } else {
            queryParameters.append("rating", data.rating);
          }
        }
        return `${
          apiConfig.HOTEL.RESERVATIONS.GET_ALL
        }?${queryParameters.toString()}`;
      },
      providesTags: [],
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
