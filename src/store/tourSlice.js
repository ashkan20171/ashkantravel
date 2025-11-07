import { createSlice } from "@reduxjs/toolkit";
import toursData from "../data/tours";

const tourSlice = createSlice({
  name: "tours",
  initialState: {
    list: toursData,
  },
  reducers: {
    addTour: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addTour } = tourSlice.actions;
export default tourSlice.reducer;
