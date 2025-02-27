"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 z-10 hidden md:block right-5 p-3 rounded-full bg-violet-600 text-white shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollToTop;
