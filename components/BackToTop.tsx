"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 1. Handle Mounting to prevent Hydration Errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Handle Scroll Logic
  useEffect(() => {
    // We only attach the listener if we are mounted
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 3. Prevent Server-Side Rendering of this component
  if (!mounted) return null;

  return (
    <div className="fixed bottom-24 right-8 z-[9999]">
      <button
        onClick={scrollToTop}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-2xl transition-all duration-300 hover:bg-brand-red hover:-translate-y-1 
          ${isVisible ? "scale-100 opacity-100" : "pointer-events-none scale-0 opacity-0"}
        `}
        aria-label="Back to top"
      >
        <ChevronUp size={28} />
      </button>
    </div>
  );
}