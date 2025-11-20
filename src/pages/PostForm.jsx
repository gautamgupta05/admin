import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import BackButton from "../components/BackButton";

import * as postsApi from "../api/posts";
import { useDispatch } from "react-redux";
import {
  createNewPost,
  updateExistingPost,
} from "../features/posts/postsSlice";

export default function PostForm() {
  const { id } = useParams();
  const editMode = !!id;
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featured, setFeatured] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [featuredPreview, setFeaturedPreview] = useState(null);
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      postsApi.fetchPost(id).then((res) => {
        const p = res.data.data || res.data;
        setTitle(p.title || "");
        setExcerpt(p.excerpt || "");
        setContent(p.content || "");
        // IMPORTANT
        setExistingImage(p.featured_image); // full URL
        setFeatured(null); // no new file selected
        setFeaturedPreview(p.featured_image); // show existing image
      });
    }
  }, [editMode, id]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFeatured(file);
    setFeaturedPreview(URL.createObjectURL(file));
  };

  const uploadAndGetPath = async () => {
  // CASE 1: Editing & no new image selected → keep old image
  if (editMode && !featured) {
    return existingImage;
  }

  // CASE 2: New image selected → upload
  if (featured) {
    const fd = new FormData();
    fd.append("file", featured);
    const res = await postsApi.uploadMedia(fd);
    return res.data.path || res.data.url || (res.data.data && res.data.data.path);
  }

  return null;
};

  const submit = async (e) => {
    e.preventDefault();
    try {
      const featured_path = await uploadAndGetPath();
      const payload = {
        title,
        excerpt,
        content,
        featured_image: featured_path,
        is_published: false,
      };

      if (editMode) {
        await dispatch(updateExistingPost({ id, data: payload })).unwrap();
      } else {
        await dispatch(createNewPost(payload)).unwrap();
      }

      nav("/posts");
    } catch (err) {
      alert("Save failed: " + (err?.message || JSON.stringify(err)));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
         <BackButton />
        <h1 className="text-xl font-bold">Create Post</h1>
      </div>
      <div className="justify-between">

     
      <form onSubmit={submit} className="max-w-3xl">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          placeholder="Title"
        />

        <input
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          placeholder="Excerpt"
        />

        <textarea
          className="w-full p-2 border rounded mb-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={6}
        />

        <div className="mb-3">
          <label className="block mb-1">Featured Image</label>
          <input type="file" onChange={handleFile} />
          {featuredPreview && (
            <img
              src={featuredPreview}
              alt="preview"
              className="mt-2 w-40 rounded"
            />
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Save
          </button>
          <button
            type="button"
            onClick={() => nav("/posts")}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
       </div>
    </div>
  );
}
