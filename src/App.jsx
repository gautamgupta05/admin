import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PostsList from "./pages/PostsList";
import PostForm from "./pages/PostForm";
import ProtectedRoute from "./components/ProtectedRoute";
import PagesList from "./pages/PagesList";
import PageForm from "./pages/PageForm";
import MediaManager from "./pages/MediaManager";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <PostsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/new"
          element={
            <ProtectedRoute>
              <PostForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/:id/edit"
          element={
            <ProtectedRoute>
              <PostForm />
            </ProtectedRoute>
          }
        />
        <Route path="/pages" element={<PagesList />} />
        <Route path="/pages/create" element={<PageForm />} />
        <Route path="/pages/:id/edit" element={<PageForm />} />
        <Route path="/media" element={<MediaManager />} />

      </Routes>
    </BrowserRouter>
  );
}
