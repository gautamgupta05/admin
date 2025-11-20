import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../api/pages";
import { useDispatch } from "react-redux";
import { createNewPage, updateExistingPage } from "../features/pages/pagesSlice";

export default function PageForm() {
  const { id } = useParams();
  const editMode = !!id;

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      api.fetchPage(id).then(res => {
        const p = res.data.data;
        setTitle(p.title);
        setExcerpt(p.excerpt || "");
        setContent(p.content || "");
      });
    }
  }, [id, editMode]);

  const submit = (e) => {
    e.preventDefault();

    const payload = { title, excerpt, content };

    if (editMode) {
      dispatch(updateExistingPage({ id, data: payload })).then(() => nav("/pages"));
    } else {
      dispatch(createNewPage(payload)).then(() => nav("/pages"));
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={submit} className="max-w-3xl">
        <h1 className="text-xl font-bold mb-4">{editMode ? "Edit Page" : "Create Page"}</h1>

        <input
          className="w-full p-2 mb-3 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <input
          className="w-full p-2 mb-3 border rounded"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Excerpt"
        />

        <textarea
          className="w-full p-2 border rounded mb-3"
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />

        <button className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
      </form>
    </div>
  );
}
