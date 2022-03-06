import { createSlice } from "@reduxjs/toolkit";

const data = JSON.parse(localStorage.getItem("CART"));
const cartData = data ? data : [];

export const cartSlice = createSlice({
  name: "carts",
  initialState: cartData,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const product = action.payload;
      const quanlity = 1;
      const index = state.findIndex((ele, index) => {
        return ele.product.id === product.id;
      });
      if (index === -1) {
        state.push({
          product,
          quanlity,
        });
      } else {
        state[index].quanlity += quanlity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
    },
    DELETE_PRODUCT_IN_CART: (state, action) => {
      const index = state.findIndex((ele, index) => {
        return ele.product.id === action.payload.id;
      });

      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("CART", JSON.stringify(state));
      }
    },
    UPDATE_PRODUCT_IN_CART: (state, action) => {
      const { product } = action.payload;
      if(action.payload.quanlity>=0){
      const index = state.findIndex((ele, index) => {
        return ele.product.id === product.id;
      });
      if (index !== -1) {
        state[index].quanlity = action.payload.quanlity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return state;
    }
    },
  },
});


export const { ADD_TO_CART, DELETE_PRODUCT_IN_CART, UPDATE_PRODUCT_IN_CART } =
  cartSlice.actions;

export default cartSlice.reducer;
