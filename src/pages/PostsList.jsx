import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, removePost, publishToggle } from "../features/posts/postsSlice";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((s) => s.posts.items);

  useEffect(() => {
    dispatch(getPosts({ page: 1 }));
  }, [dispatch]);

  const onDelete = (id) => {
    if (confirm("Delete this post?")) dispatch(removePost(id));
  };

  const onToggle = (id) => {
    dispatch(publishToggle(id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
         <BackButton />
        <h1 className="text-xl">Posts</h1>
        <Link to="/posts/new" className="px-3 py-1 bg-green-600 text-white rounded">New Post</Link>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead><tr>
          <th className="p-2">Title</th>
          <th className="p-2">Published</th>
          <th className="p-2">Actions</th>
        </tr></thead>
        <tbody>
          {posts.map(p => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.title}</td>
              <td className="p-2">{p.is_published ? "Yes" : "No"}</td>
              <td className="p-2 space-x-2">
                <Link to={`/posts/${p.id}/edit`} className="px-2 py-1 bg-blue-500 text-white rounded">Edit</Link>
                <button onClick={()=>onToggle(p.id)} className="px-2 py-1 bg-yellow-500 rounded">Toggle</button>
                <button onClick={()=>onDelete(p.id)} className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
