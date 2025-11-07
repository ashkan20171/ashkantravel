import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import tourReducer from "./tourSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    tours: tourReducer,
  },
});
