// src/App.jsx
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ToastProvider } from "./context/ToastContext";
import Home from "./pages/Home";
import BlogsPage from "./pages/BlogsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTop from "./components/common/ScrollToTop";
import PageTransition from "./components/common/PageTransition";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <ToastProvider>
        <ScrollToTop />
        <PageTransition />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectsPage />} />
          {/* Dedicated 404 hash route */}
          <Route path="/404" element={<NotFoundPage />} />
          {/* Catch-all for unknown hash paths */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      {/* Toast notifications */}
      </ToastProvider>
    </>
  );
};

export default App;
