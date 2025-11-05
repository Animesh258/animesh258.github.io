import React, { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * ToastContext
 * Unified notification system that adapts to brand colors and dark/light mode.
 *
 * Uses Tailwind + CSS variables defined in theme plugin.
 * Accessible anywhere with:  const { showToast } = useToast();
 */

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  // Helper to fetch current CSS variable (adapts to light/dark mode)
  const getVar = (name) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const showToast = (type = "info", message = "Something happened!") => {
    // 🎨 Color mapping — reads directly from your Tailwind-defined variables
    const colorMap = {
      success:
        getVar("--color-toast-success") || getVar("--color-scroll-primary"),
      error: getVar("--color-toast-error") || "#E8746B",
      warning: getVar("--color-toast-warning") || "#CC9900",
      info: getVar("--color-toast-info") || "#6A5ACD",
    };

    const background = colorMap[type] || colorMap.info;
    const textColor = getVar("--color-text-primary") || "#F8F8F8";

    // 💬 Show the toast
    toast(message, {
      icon:
        type === "success"
          ? "✅"
          : type === "error"
          ? "❌"
          : type === "warning"
          ? "⚠️"
          : "ℹ️",
      style: {
        background,
        color: textColor,
        fontFamily: "Open Sans, sans-serif",
        borderRadius: "8px",
        padding: "12px 16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      },
      progressStyle: {
        background: textColor,
      },
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Global Toast Container (kept minimal and consistent with theme) */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        newestOnTop
        theme="colored"
      />
    </ToastContext.Provider>
  );
};

// Simple hook for access
export const useToast = () => useContext(ToastContext);
