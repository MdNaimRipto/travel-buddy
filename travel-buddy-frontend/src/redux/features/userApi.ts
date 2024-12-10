import { apiConfig } from "@/configs/apiConfig";
import { IUserRegister, linkedProvidersEnums } from "@/types/userTypes";
import { userApiSlice } from "../apis/userApiSlice";

const userApi = userApiSlice.injectEndpoints({
  endpoints: builder => ({
    //
    // * Custom Register
    //
    customRegister: builder.mutation({
      query: ({ data }: { data: IUserRegister }) => ({
        url: apiConfig.USER.REGISTER,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
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
    //
    // * Provider Login
    //
    providerLogin: builder.mutation({
      query: ({
        data,
      }: {
        data: {
          userInfo: IUserRegister;
          authMethod: linkedProvidersEnums;
        };
      }) => ({
        url: apiConfig.USER.PROVIDER_LOGIN,
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

export const {
  useCustomLoginMutation,
  useCustomRegisterMutation,
  useProviderLoginMutation,
} = userApi;
