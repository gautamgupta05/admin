import api from "./axios";

export const loginApi = (email, password) =>
  api.post("/login", { email, password });

export const meApi = () => api.get("/me");

export const logoutUser = () => api.post("/logout");
