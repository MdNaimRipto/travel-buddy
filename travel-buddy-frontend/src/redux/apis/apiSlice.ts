import { apiConfig } from "@/configs/apiConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: apiConfig.BASE_URL,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
