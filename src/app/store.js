import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postsReducer from "../features/posts/postsSlice";
import pagesReducer from "../features/pages/pagesSlice";
import mediaReducer from "../features/media/mediaSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    pages: pagesReducer,
    media: mediaReducer, 
  },
});
