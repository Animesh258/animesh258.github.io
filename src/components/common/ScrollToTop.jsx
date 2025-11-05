import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll when route changes (not when clicking anchors)
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]); // triggers only on route (path) change

  return null;
};

export default ScrollToTop;
