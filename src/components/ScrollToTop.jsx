import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow AOS and images to mount
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500); // 500ms allows layout to settle
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}