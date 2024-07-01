import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    currentt_val: 0,
    cart: {},
    max_limit: 500,
  },
  reducers: {
    addProduct(state, action) {
      const product_id = action.payload.id;
      state.currentt_val += 1;

      // state.cart[product_id] = (state.cart?.[product_id] ?? 0) + 1

      if (state.cart[product_id]) {
        state.cart[product_id].count += 1;
      } else {
        state.cart[product_id] = { ...action.payload, count: 1 };
      }
    },

    removeProduct(state, action) {
      const product_id = action.payload.id;

      if (state.cart[product_id]?.count && state.cart[product_id].count > 1 ) {
        state.cart[product_id].count -= 1;
        state.currentt_val -= 1;
      }else{
        state.currentt_val -= 1;
        delete state.cart[product_id];
      }
    },

    clearProduct(state, action) {
      const product_id = action.payload.id;

      if (state.cart[product_id]?.count) {
        state.currentt_val -= Number(state.cart[product_id].count);
        delete state.cart[product_id];
      }
    },
  },
});

export const { addProduct, removeProduct, clearProduct } = counter.actions;
export default counter.reducer;
