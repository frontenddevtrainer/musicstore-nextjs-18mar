import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import CartReducer, { CartState } from "./slices/cart"
import AlbumsReducer, { AlbumsState } from "./slices/albums"

export interface AppState {
    cart: CartState,
    albums: AlbumsState
}

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: CartReducer,
            albums: AlbumsReducer
        }
    })
}

// export const wrapper = createWrapper(makeStore)