import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./apis/authApiSlice";

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: getAuthMiddleware =>
    getAuthMiddleware().concat(authApiSlice.middleware),
});
