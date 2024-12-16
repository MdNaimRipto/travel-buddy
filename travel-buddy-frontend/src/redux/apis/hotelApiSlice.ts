import { apiConfig } from "@/configs/apiConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hotelApiSlice = createApi({
  reducerPath: "hotelApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: apiConfig.BASE_URL,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
