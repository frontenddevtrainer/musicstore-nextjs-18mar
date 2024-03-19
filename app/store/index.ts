import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => {
    return configureStore({
        reducer: {}
    })
}

// export const wrapper = createWrapper(makeStore)