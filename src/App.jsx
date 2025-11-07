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
import RedirectHandler from "./components/common/RedirectHandler";

const App = () => {
  return (
    <>
      <ToastProvider>
        <ScrollToTop />
        <RedirectHandler />
        <PageTransition />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      {/* Toast notifications */}
      </ToastProvider>
    </>
  );
};

export default App;
