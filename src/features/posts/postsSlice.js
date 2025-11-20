import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as postsApi from "../../api/posts";

export const getPosts = createAsyncThunk("posts/getPosts", async (params) => {
  const res = await postsApi.fetchPosts(params);
  return res.data;
});

export const createNewPost = createAsyncThunk("posts/create", async (payload) => {
  const res = await postsApi.createPost(payload);
  return res.data;
});

export const updateExistingPost = createAsyncThunk("posts/update", async ({id, data}) => {
  const res = await postsApi.updatePost(id, data);
  return res.data;
});

export const removePost = createAsyncThunk("posts/remove", async (id) => {
  await postsApi.deletePost(id);
  return id;
});

export const publishToggle = createAsyncThunk("posts/publish", async (id) => {
  const res = await postsApi.togglePublish(id);
  return res.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { items: [], meta: null, status: "idle", error: null },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        // API returns pagination -> data, meta (depends on backend). adjust as needed
        state.items = action.payload.data || action.payload;
        state.meta = action.payload.meta || null;
        state.status = "succeeded";
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload.data || action.payload);
      })
      .addCase(updateExistingPost.fulfilled, (state, action) => {
        const updated = action.payload.data || action.payload;
        state.items = state.items.map((it) => (it.id === updated.id ? updated : it));
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.items = state.items.filter((it) => it.id !== action.payload);
      })
      .addCase(publishToggle.fulfilled, (state, action) => {
        const updated = action.payload.data || action.payload;
        state.items = state.items.map((it) => (it.id === updated.id ? updated : it));
      });
  },
});

export default postsSlice.reducer;
