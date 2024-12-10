import { configureStore } from "@reduxjs/toolkit";
import { userApiSlice } from "./apis/userApiSlice";

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: getAuthMiddleware =>
    getAuthMiddleware().concat(userApiSlice.middleware),
});
