import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMedia, removeMedia } from "../features/media/mediaSlice";
import { uploadMedia } from "../api/media";

export default function MediaManager() {
  const dispatch = useDispatch();
  const media = useSelector((s) => s.media.items);
  const loading = useSelector((s) => s.media.loading);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);

  const upload = async () => {
    if (!file) return alert("Please choose a file!");
    const fd = new FormData();
    fd.append("file", file);

    await uploadMedia(fd);

    setFile(null);
    setPreview(null);

    dispatch(getMedia());
  };

  const remove = (id) => {
    if (confirm("Delete file?")) {
      dispatch(removeMedia(id)).then(() => dispatch(getMedia()));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Media Library</h1>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={upload}
        >
          Upload
        </button>
      </div>

      {preview && (
        <div className="mb-4">
          <img
            src={preview}
            className="w-40 h-40 object-cover border rounded"
            alt="preview"
          />
        </div>
      )}

      {loading && <p>Loading media...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {media.map((m) => (
          <div key={m.id} className="border rounded p-2 relative">
            <img
              src={m.url}
              className="w-full h-32 object-cover rounded"
            />

            <p className="text-sm mt-2 break-all">{m.filename}</p>

            <button
              className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 text-xs rounded"
              onClick={() => remove(m.id)}
            >
              X
            </button>

            <button
              className="mt-2 w-full px-2 py-1 bg-gray-200 text-sm rounded"
              onClick={() => navigator.clipboard.writeText(m.url)}
            >
              Copy URL
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
