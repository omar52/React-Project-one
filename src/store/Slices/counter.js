import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    currentt_val: 0,
    max_limit: 500,
  },
  reducers: {
    increaseCounter: (state) => {
      state.currentt_val += 1;
    },
    deccreaseCounter: (state) => {
      state.currentt_val -= 1;
    },
  },
});

export const { increaseCounter, deccreaseCounter } = counter.actions;
export default counter.reducer;
