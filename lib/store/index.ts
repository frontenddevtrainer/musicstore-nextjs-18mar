import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import CartReducer from "./slices/cart"

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: CartReducer
        }
    })
}

// export const wrapper = createWrapper(makeStore)