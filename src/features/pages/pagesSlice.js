import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/pages";

export const getPages = createAsyncThunk("pages/get", () => api.fetchPages());
export const createNewPage = createAsyncThunk("pages/create", (data) => api.createPage(data));
export const updateExistingPage = createAsyncThunk("pages/update", ({ id, data }) =>
  api.updatePage(id, data)
);
export const deletePageById = createAsyncThunk("pages/delete", (id) =>
  api.deletePage(id)
);

const pagesSlice = createSlice({
  name: "pages",
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPages.fulfilled, (state, action) => {
        state.items = action.payload.data.data;
      })
  },
});

export default pagesSlice.reducer;
