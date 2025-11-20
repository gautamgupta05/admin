import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  let token = null;

  if (typeof window !== "undefined") {
    try {
      token = localStorage.getItem("token");
    } catch (e) {
      console.warn("Blocked:", e);
    }
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}