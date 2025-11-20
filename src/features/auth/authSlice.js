import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, meApi, logoutUser } from "../../api/auth";


// Load token safely
let token = null;
if (typeof window !== "undefined") {
  try {
    token = window.localStorage.getItem("token");
  } catch (error) {
    token = null;
  }
}
export const login = createAsyncThunk("auth/login", async ({email, password}) => {
  const res = await loginApi(email, password);
  return res.data;
});

export const fetchMe = createAsyncThunk("auth/me", async () => {
  const res = await meApi();
  return res.data;
});

export const logoutRequest = createAsyncThunk("auth/logoutRequest", async () => {
  await logoutUser();
  return true;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: token ? token : null,
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
        state.status = "succeeded";
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      // LOGOUT SUCCESS
      .addCase(logoutRequest.fulfilled, (state) => {
        state.token = null;
        state.user = null;
        localStorage.removeItem("token");
      });
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;


