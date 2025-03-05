import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/Products/Products";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: JSON.parse(localStorage.getItem("products on cart") || "[]"),
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("products on cart", JSON.stringify(state.cart));
    },

    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      if (productToRemove) {
        const products = state.cart.filter(
          (cart) => cart.name !== productToRemove.name
        );
        state.cart = products;
        localStorage.setItem("products on cart", JSON.stringify(state.cart));
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { removeProduct, addProduct, clearCart } = cartSlice.actions;
