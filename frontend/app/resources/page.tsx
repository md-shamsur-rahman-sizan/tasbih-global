"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Download, Video, BookOpen, ExternalLink, Search } from "lucide-react";

const resources = [
  { title: "IELTS Band Score Guide", category: "Exam Prep", type: "PDF", size: "1.2 MB" },
  { title: "Student Visa Checklist - UK", category: "Visa", type: "PDF", size: "0.8 MB" },
  { title: "How to Write a Winning SOP", category: "Guides", type: "Article", size: "5 min read" },
  { title: "Financial Document Guide", category: "Visa", type: "PDF", size: "1.5 MB" },
  { title: "PTE vs IELTS: Which is better?", category: "Exam Prep", type: "Video", size: "12:00" },
  { title: "Scholarship Application Tips", category: "Guides", type: "PDF", size: "2.1 MB" },
];

const categories = ["All", "Exam Prep", "Visa", "Guides"];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredResources = activeTab === "All" 
    ? resources 
    : resources.filter(r => r.category === activeTab);

  return (
    <main className="min-h-screen bg-slate-50 font-tahoma">
      <Navbar />

      {/* Hero Section */}
      <header className="pt-50 pb-20 bg-brand-blue text-white text-center">
        <h1 className="text-[3rem] font-extrabold uppercase">Student <span className="text-brand-red">Resources</span></h1>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto px-4">
          Download essential guides, checklists, and preparation materials to simplify your study abroad journey.
        </p>
      </header>

      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeTab === cat 
                ? "bg-brand-red text-white shadow-lg" 
                : "bg-white text-brand-blue hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                {item.type === "PDF" && <FileText size={24} />}
                {item.type === "Video" && <Video size={24} />}
                {item.type === "Article" && <BookOpen size={24} />}
              </div>
              
              <div className="flex-1">
                <span className="text-[10px] uppercase font-black text-brand-red tracking-widest">{item.category}</span>
                <h3 className="font-bold text-brand-blue text-lg mt-1 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs mt-1">{item.type} • {item.size}</p>
              </div>

              <button className="self-center p-2 text-slate-300 hover:text-brand-blue transition-colors">
                {item.type === "Article" ? <ExternalLink size={20} /> : <Download size={20} />}
              </button>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-20 bg-white border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold text-brand-blue">Can't find what you're looking for?</h3>
          <p className="text-slate-500 mt-2 mb-6">Our experts can provide customized checklists for your specific case.</p>
          <button className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-red transition-all">
            Request a Document
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}