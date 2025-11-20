import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className="p-4 bg-white shadow flex justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/posts" className="font-semibold">Admin</Link>
        <Link to="/posts" className="text-sm">Posts</Link>
      </div>
      <div>
        <button className="px-3 py-1 bg-red-600 text-white rounded" onClick={()=>dispatch(logout())}>Logout</button>
      </div>
    </nav>
  );
}
