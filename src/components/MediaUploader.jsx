import React, { useState } from "react";
import { uploadMedia } from "../api/posts";

export default function MediaManager({ onUploaded }) {
  const [file, setFile] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Choose a file");
    const fd = new FormData();
    fd.append("file", file);
    const res = await uploadMedia(fd);
    const data = res.data.data || res.data;
   
    onUploaded(data.path || data.url || data);
    setFile(null);
    alert("Uploaded");
  };

  return (
    <form onSubmit={submit} className="p-4 border rounded">
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit" className="ml-2 px-3 py-1 bg-blue-600 text-white rounded">Upload</button>
    </form>
  );
}
