import { apiConfig } from "@/configs/apiConfig";
import {
  IUpdatePassword,
  IUser,
  IUserRegister,
  linkedProvidersEnums,
} from "@/types/userTypes";
import { apiSlice } from "../apis/apiSlice";
import Cookies from "js-cookie";

const userApi = apiSlice.injectEndpoints({
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
    //
    // * Update User
    //
    updateUser: builder.mutation({
      query: ({ data, userID }: { data: Partial<IUser>; userID: string }) => ({
        url: `${apiConfig.USER.UPDATE_USER}/${userID}`,
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
    //
    // * Update Password
    //
    updatePassword: builder.mutation({
      query: ({ data }: { data: IUpdatePassword }) => ({
        url: apiConfig.USER.UPDATE_PASSWORD,
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
    //
    // * Verify Email For Forget Password
    //
    verifyEmailForForgetPassword: builder.mutation({
      query: ({
        data,
      }: {
        data: {
          email: string;
        };
      }) => ({
        url: apiConfig.USER.FIND_USER_FOR_FORGOT_PASSWORD,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
    //
    // * Verify Email For Forget Password
    //
    verifyOtpForForgetPassword: builder.mutation({
      query: ({
        data,
      }: {
        data: {
          email: string;
          otp: string;
        };
      }) => ({
        url: apiConfig.USER.VERIFY_OTP_FOR_FORGOT_PASSWORD,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
    //
    // * Reset / Forget Password
    //
    forgetPassword: builder.mutation({
      query: ({
        data,
      }: {
        data: {
          email: string;
          password: string;
        };
      }) => ({
        url: apiConfig.USER.FORGOT_PASSWORD,
        method: "PATCH",
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
  useUpdateUserMutation,
  useUpdatePasswordMutation,
  useVerifyEmailForForgetPasswordMutation,
  useVerifyOtpForForgetPasswordMutation,
  useForgetPasswordMutation,
} = userApi;
