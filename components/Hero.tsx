"use client";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
import Link from 'next/link';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative bg-white pt-32 pb-20 overflow-hidden font-tahoma">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* TEXT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Don’t just dream of <br />
            <span className="text-brand-blue">studying abroad—</span> <br />
            <span className="text-brand-red italic">make it happen!</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            We provide all the help you need to reach your dream international college! 
            Get access to over 100+ universities across USA, UK, Australia, and more.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-red transition-all shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                Book a Free Consultation
              </button>

              {/* The Modal */}
              <ConsultationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
              />
            </>
            <Link 
              href="/contact"
              className="inline-block border-2 border-slate-200 px-8 py-4 rounded-lg font-bold text-lg hover:border-brand-blue hover:text-brand-blue transition-all cursor-pointer group text-center"
            >
              Contact Us <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden flex items-center justify-center text-slate-400">
            <img src="/images/Banner_Image.png" alt="Banner_Image" style={{height: "500px"}}/>
          </div>
          
          {/* Decorative Circle (Yocket Style) */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-red rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue rounded-full opacity-10 blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}