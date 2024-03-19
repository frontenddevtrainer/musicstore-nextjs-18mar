import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import CartReducer, { CartState } from "./slices/cart"

export interface AppState {
    cart: CartState
}

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: CartReducer
        }
    })
}

// export const wrapper = createWrapper(makeStore)