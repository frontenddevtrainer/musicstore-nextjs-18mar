import { createSlice } from "@reduxjs/toolkit/react";
import { fetchAlbums } from "../actions/cart";

export interface AlbumsState {
    items: any[],
    loading: boolean,
    error: any
}

const initialState: AlbumsState = {
    items: [],
    loading: false,
    error: null
}

const AlbumSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
    },
    extraReducers: function (builder) {
        builder
            .addCase(
                fetchAlbums.pending, (state, { }) => {
                    state.loading = true;
                }
            )
            .addCase(
                fetchAlbums.fulfilled, (state, { payload }) => {
                    state.loading = false;
                    state.items = payload
                }
            )
            .addCase(
                fetchAlbums.rejected, (state, { error }) => {
                    state.loading = false;
                    state.error = error.message
                }
            )
    }
});

const { } = AlbumSlice.actions
export default AlbumSlice.reducer;