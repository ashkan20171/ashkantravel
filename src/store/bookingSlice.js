import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    items: [],
  },
  reducers: {
    addBooking: (state, action) => {
      state.items.push(action.payload);
    },
    removeBooking: (state, action) => {
      state.items = state.items.filter((b) => b.id !== action.payload);
    },
  },
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
