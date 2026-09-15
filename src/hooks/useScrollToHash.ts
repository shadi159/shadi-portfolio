import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smoothly scrolls to the element matching the current URL hash
 * (e.g. "#about"). Falls back to scrolling to the top when there
 * is no hash, which covers navigating back to "/" from another page.
 */
export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash || hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      // Wait a tick so the page has rendered before measuring position.
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [hash]);
}
