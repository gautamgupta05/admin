import api from "./axios";

export const fetchPages = (params) => api.get("/pages", { params });
export const fetchPage = (id) => api.get(`/pages/${id}`);
export const createPage = (data) => api.post("/pages", data);
export const updatePage = (id, data) => api.put(`/pages/${id}`, data);
export const deletePage = (id) => api.delete(`/pages/${id}`);
