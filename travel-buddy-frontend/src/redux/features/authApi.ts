import { apiConfig } from "@/configs/apiConfig";
import { authApiSlice } from "../apis/authApiSlice";

const authApi = authApiSlice.injectEndpoints({
  endpoints: builder => ({
    //
    // * Custom Login
    //
    customLogin: builder.mutation({
      query: ({ data }: { data: { email: string; password: string } }) => ({
        url: apiConfig.USER.LOGIN,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
  }),
});

export const { useCustomLoginMutation } = authApi;
