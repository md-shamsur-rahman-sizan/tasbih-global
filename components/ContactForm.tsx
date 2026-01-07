"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    
    // For now, we will simulate a success message. 
    // Later, we can connect this to an email service like EmailJS or Resend.
    setTimeout(() => {
      setStatus("Thank you! Our expert counselors will call you shortly.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white font-tahoma">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* LEFT SIDE: INFO */}
          <div className="md:w-1/3 bg-brand-blue p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">Free Consultation</h2>
            <p className="text-blue-100 mb-8">
              Fill out the form and we'll help you choose the best university based on your profile.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="bg-white/20 p-2 rounded-full">📞</span>
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-white/20 p-2 rounded-full">📍</span>
                <span>Banani, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM */}
          <div className="md:w-2/3 p-10 bg-white">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input required type="text" placeholder="John Doe" className="p-3 bg-slate-50 border rounded-lg outline-brand-blue" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="p-3 bg-slate-50 border rounded-lg outline-brand-blue" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input required type="tel" placeholder="+880..." className="p-3 bg-slate-50 border rounded-lg outline-brand-blue" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-slate-700 mb-2">Interested Destination</label>
                <select className="p-3 bg-slate-50 border rounded-lg outline-brand-blue">
                  <option>USA</option>
                  <option>UK</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                <textarea rows={4} placeholder="Tell us about your study goals..." className="p-3 bg-slate-50 border rounded-lg outline-brand-blue"></textarea>
              </div>

              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-brand-red text-white font-bold py-4 rounded-lg hover:bg-brand-blue transition-all shadow-lg">
                  Submit Application
                </button>
                {status && (
                  <p className="mt-4 text-center font-bold text-brand-blue animate-pulse">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}