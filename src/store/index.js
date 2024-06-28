import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counter";


export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
