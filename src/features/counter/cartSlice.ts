import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  //CartState is a shopping bascket and an array of CartItem
  value: CartItem[];
}
export interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productCount: number;
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      let temp = [...state.value]; // to push item to cart , it must be stored in a temp variable
      const index = temp.findIndex(function (item: CartItem) {
        return item.productId === action.payload.productId;
      });
      if (index < 0) temp.push(action.payload); //????
      else {
        temp[index].productCount += 1;
      }
      state.value = temp;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      let temp = [...state.value];
      const index = temp.findIndex(function (item: CartItem) {
        //findIndex for each element in temp, calls the function and return true or false
        return item.productId === action.payload;
      });
      if (temp[index].productCount === 1) {
        if (index >= 0) temp.splice(index, 1); //remove item based on index
      } else {
        temp[index].productCount -= 1;
      }
      state.value = temp;
    },
    removeAll: (state, action: PayloadAction<number>) => {
      let temp = [...state.value];
      const index = temp.findIndex(function (item: CartItem) {
        return item.productId === action.payload;
      });
      if (index >= 0) temp.splice(index, 1); 
      state.value = temp;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
