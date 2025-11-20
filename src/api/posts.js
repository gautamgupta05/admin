import api from "./axios";

export const fetchPosts = (params) => api.get("/posts", { params });
export const fetchPost = (id) => api.get(`/posts/${id}`);
export const createPost = (data) => api.post("/posts", data);
export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);
export const togglePublish = (id) => api.patch(`/posts/${id}/publish`);
export const uploadMedia = (formData) => api.post("/media/upload", formData, {
  headers: { "Content-Type": "multipart/form-data" },
});
