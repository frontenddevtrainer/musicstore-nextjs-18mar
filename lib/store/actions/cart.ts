import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAlbums = createAsyncThunk("albums/fetchAlbums", async () => {
    const response = await fetch("http://localhost:3000/api/albums");
    const json = await response.json();
    return json;
})