// src/components/common/PageTransition.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = () => {
  const [fadeClass, setFadeClass] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Trigger fade animation when route changes
    setFadeClass("fade-overlay-active");

    const timeout = setTimeout(() => {
      setFadeClass("");
    }, 500); // Duration matches CSS animation

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return <div className={`fade-overlay ${fadeClass}`} />;
};

export default PageTransition;
