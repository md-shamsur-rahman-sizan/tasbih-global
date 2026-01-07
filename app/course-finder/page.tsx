"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CourseFinder() {
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dummyCourses = [
    { id: 1, title: "MSc in Data Science", uni: "University of Hertfordshire", country: "UK", fee: "£15,000", level: "Masters" },
    { id: 2, title: "Bachelors in Computer Science", uni: "Arizona State University", country: "USA", fee: "$32,000", level: "Bachelors" },
    { id: 3, title: "MBA", uni: "University of Sydney", country: "Australia", fee: "AUD 45,000", level: "Masters" },
    { id: 4, title: "Masters in Public Health", uni: "University of Toronto", country: "Canada", fee: "CAD 28,000", level: "Masters" },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 font-tahoma">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* SIDEBAR */}
          <aside className="md:w-1/4 bg-white p-6 rounded-2xl shadow-sm h-fit md:sticky md:top-28">
            <h3 className="font-bold text-lg mb-6 text-brand-blue border-b pb-2">Filters</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="level" className="block text-sm font-bold mb-2">Study Level</label>
                <select id="level" className="w-full p-2 border rounded-md bg-slate-50 text-sm outline-brand-blue">
                  <option>All Levels</option>
                  <option>Bachelors</option>
                  <option>Masters</option>
                  <option>PhD</option>
                </select>
              </div>

              <div>
                <p className="text-sm font-bold mb-2">Country</p>
                <div className="space-y-2 text-sm">
                  {["USA", "UK", "Australia", "Canada"].map(c => (
                    <div key={c} className="flex items-center gap-2">
                      <input type="checkbox" id={c} className="accent-brand-red h-4 w-4" /> 
                      <label htmlFor={c} className="cursor-pointer">{c}</label>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-brand-red text-white py-3 rounded-md font-bold text-sm hover:bg-brand-blue transition-colors">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="md:w-3/4">
            <div className="mb-8">
              <input 
                type="text" 
                placeholder="Search for courses (e.g. Computer Science)..." 
                className="w-full p-4 rounded-2xl border-none shadow-md focus:ring-2 focus:ring-brand-blue outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {dummyCourses.map(course => (
                <div key={course.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-blue transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="inline-block text-[10px] font-bold bg-blue-100 text-brand-blue px-2 py-1 rounded uppercase tracking-wider">
                      {course.country}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-slate-800">{course.title}</h3>
                    <p className="text-slate-500 text-sm">{course.uni}</p>
                  </div>
                  
                  <div className="w-full md:w-auto text-left md:text-right border-t md:border-t-0 pt-4 md:pt-0">
                    <p className="text-lg font-bold text-brand-red">{course.fee}</p>
                    <p className="text-xs text-slate-400 mb-4">{course.level}</p>
                    <button className="w-full md:w-auto bg-brand-blue text-white px-8 py-2 rounded font-bold text-sm hover:bg-brand-red transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}