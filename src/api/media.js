import api from "./axios";

export const fetchMedia = (params) => api.get("/media", { params });

export const uploadMedia = (formData) =>
  api.post("/media/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteMedia = (id) => api.delete(`/media/${id}`);
