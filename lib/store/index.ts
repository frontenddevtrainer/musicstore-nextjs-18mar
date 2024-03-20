import { configureStore } from "@reduxjs/toolkit";
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