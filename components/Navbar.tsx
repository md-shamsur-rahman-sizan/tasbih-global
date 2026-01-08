"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // New: Hydration Shield

  useEffect(() => {
    setMounted(true); // Tell React we are now on the client side
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IMPORTANT: If not mounted, render a simple version that matches the server exactly
  // This prevents the "Server vs Client" conflict.
  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-[1000] bg-white py-5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
           <div className="w-[200px] h-[60px] bg-slate-100 animate-pulse rounded" />
           <div className="hidden lg:flex space-x-8">
             <div className="w-20 h-4 bg-slate-100 rounded" />
             <div className="w-20 h-4 bg-slate-100 rounded" />
           </div>
        </div>
      </nav>
    );
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Study Destinations", href: "/destinations" },
    { name: "Course Finder", href: "/course-finder" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 font-tahoma 
      ${isScrolled 
        ? "bg-white py-2 shadow-lg" 
        : "bg-white py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="transition-all duration-500">
          <div className={`relative transition-all duration-500 ${isScrolled ? "w-[150px]" : "w-[200px]"}`}>
             {/* Using your Image tag here */}
             <Image 
                src="/images/Logo_Updated.png" 
                alt="Tasbih Global Logo" 
                width={isScrolled ? 150 : 200} 
                height={60}
                className="object-contain transition-all duration-500"
                priority // Ensures logo loads immediately
             />
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              /* We use a single stable class and let the CSS handle the scroll state */
              className={`nav-link-hover ${isScrolled ? "is-scrolled py-2 px-5 text-sm" : ""}`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/register" 
            className={`ml-4 font-bold rounded-md transition-all duration-500 bg-brand-blue text-white 
            hover:bg-brand-red hover:shadow-lg hover:scale-105 transform
            ${isScrolled ? "py-2 px-5 text-sm" : "py-4 px-6 text-base"}`}
          >
            Register Now
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden text-brand-blue text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t p-4 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="font-bold text-brand-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
