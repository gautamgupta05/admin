import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../features/auth/authSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutRequest()); // call API + remove token
    nav("/login"); // send user to login page
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-5 bg-white shadow rounded">
          <h2 className="text-lg font-medium">Manage Posts</h2>
          <p className="text-gray-600 mt-1">
            Create, edit and publish blog posts.
          </p>
          <Link
            to="/posts"
            className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Go to Posts
          </Link>
        </div>

        <div className="p-5 bg-white shadow rounded">
          <h2 className="text-lg font-medium">Media Library</h2>
          <p className="text-gray-600 mt-1">
            Upload and manage images/media files.
          </p>
          <Link
            to="/media"
            className="inline-block mt-3 px-4 py-2 bg-green-600 text-white rounded"
          >
            Manage Media
          </Link>
        </div>

        <div className="p-5 bg-white shadow rounded">
          <h2 className="text-lg font-medium">Pages</h2>
          <p className="text-gray-600 mt-1">
            Create & manage static website pages.
          </p>
          <Link
            to="/pages"
            className="inline-block mt-3 px-4 py-2 bg-purple-600 text-white rounded"
          >
            Manage Pages
          </Link>
        </div>
        <div className="p-5 bg-white shadow rounded">
          <h2 className="text-lg font-medium">Pages</h2>
          <p className="text-gray-600 mt-1">Create & Media Manager pages.</p>

          <Link
            to="/media"
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Media Manager
          </Link>
        </div>

        <div className="p-5 bg-white shadow rounded">
          <h2 className="text-lg font-medium">User</h2>
          <p className="text-gray-600 mt-1">Logout</p>

          <Link
            to="#"
            onClick={handleLogout}
            className="inline-block mt-3 px-4 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
