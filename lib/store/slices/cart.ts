import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
    items: any[]
}

const initialState: CartState = {
    items: []
}

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, { type, payload }) {
            state.items.push(payload)
        },
        removeFromCart() {

        }
    },
    extraReducers : function(builder){

    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;