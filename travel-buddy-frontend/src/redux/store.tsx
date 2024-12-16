import { configureStore } from "@reduxjs/toolkit";
import { userApiSlice } from "./apis/userApiSlice";
import { hotelApiSlice } from "./apis/hotelApiSlice";

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [hotelApiSlice.reducerPath]: hotelApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      userApiSlice.middleware,
      hotelApiSlice.middleware
    ),
});
