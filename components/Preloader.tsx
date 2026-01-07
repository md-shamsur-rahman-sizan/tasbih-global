"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // How long the preloader stays visible
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Internal CSS to guarantee the animation works */}
      <style jsx>{`
        @keyframes loading-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .custom-loader-bar {
          animation: loading-slide 1.5s infinite ease-in-out;
        }
      `}</style>

      <div className="flex flex-col items-center">
        {/* Brand Name with Standard Hex Colors */}
        <h1 className="text-4xl font-black tracking-tighter mb-4 animate-pulse" style={{ color: '#003366' }}>
          TASBIH <span style={{ color: '#cc0000' }}>GLOBAL</span>
        </h1>

        {/* The Loading Bar */}
        <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative">
          <div 
            className="custom-loader-bar absolute top-0 left-0 h-full w-full" 
            style={{ backgroundColor: '#cc0000' }}
          />
        </div>
        
        <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
          Loading Excellence
        </p>
      </div>
    </div>
  );
}