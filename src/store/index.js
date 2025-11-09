import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import tourReducer from "./tourSlice";
import userReducer from "./userSlice";
import bookingReducer from "./bookingSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    tours: tourReducer,
    user: userReducer,
    booking: bookingReducer,
  },
});
