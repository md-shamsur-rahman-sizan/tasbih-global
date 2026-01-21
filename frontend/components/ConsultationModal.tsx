"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4 pt-20">
      {/* 1. Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* 2. Modal Box */}
      <div className="relative bg-white h-fit w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-4 border-b flex justify-between items-end bg-slate-50">
          <h3 className="text-l font-bold uppercase text-brand-blue">Book Free Consultation</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-brand-red text-2xl">✕</button>
        </div>

        <form className="p-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs mb-1">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full p-2 border border-slate-200 rounded-lg text-xs outline-brand-blue" />
          </div>
          <div>
            <label className="block text-xs mb-1">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full p-2 border border-slate-200 rounded-lg text-xs outline-brand-blue" />
          </div>
          <div className="relative group">
            <label className="block text-xs mb-1 text-slate-700">
              Preferred Country
            </label>
            <div className="relative">
              <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg appearance-none outline-brand-blue transition-all cursor-pointer text-xs text-slate-700">
                <option value="USA">United States (USA)</option>
                <option value="UK">United Kingdom (UK)</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-blue">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <button className="w-full bg-brand-red text-white py-2 rounded-lg hover:bg-brand-blue transition-colors mt-4 cursor-pointer font-bold text-sm">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}