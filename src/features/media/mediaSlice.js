import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/media";

export const getMedia = createAsyncThunk("media/get", () => api.fetchMedia());
export const removeMedia = createAsyncThunk("media/delete", (id) =>
  api.deleteMedia(id)
);

const mediaSlice = createSlice({
  name: "media",
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMedia.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMedia.fulfilled, (state, action) => {
        state.items = action.payload.data.data; // Laravel pagination => data.data
        state.loading = false;
      });
  },
});

export default mediaSlice.reducer;
