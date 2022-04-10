import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryListPage from "./pages/CategoryListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostListPage from "./pages/PostListPage";
import "./style/reset.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CategoryListPage />} exact={true} />
      <Route path="/category/:categoryId" element={<PostListPage />} />
      <Route path="/post/:postId" element={<PostDetailPage />} />
    </Routes>
  );
}

export default App;
