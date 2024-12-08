import { apiConfig } from "@/configs/apiConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "authApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: apiConfig.BASE_URL,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
