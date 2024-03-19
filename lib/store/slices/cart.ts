import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    items: []
}

const initialState: CartState = {
    items : []
}

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(){

        },
        removeFromCart(){

        }
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;