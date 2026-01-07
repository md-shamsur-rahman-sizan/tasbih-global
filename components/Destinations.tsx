import React from 'react';
import Link from 'next/link';

export default function Destinations() {
  const countries = [
    { name: "USA", students: "5000+", flag: "🇺🇸", color: "border-blue-600" },
    { name: "UK", students: "4000+", flag: "🇬🇧", color: "border-red-600" },
    { name: "Australia", students: "3500+", flag: "🇦🇺", color: "border-blue-800" },
    { name: "Europe", students: "2500+", flag: "🇪🇺", color: "border-yellow-500" },
    { name: "Canada", students: "3000+", flag: "🇨🇦", color: "border-red-500" },
    { name: "Malaysia", students: "1500+", flag: "🇲🇾", color: "border-blue-400" },
  ];

  return (
    <section className="py-20 bg-white font-tahoma">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue uppercase">
              Top <span className="text-brand-red">Destinations</span>
            </h2>
            <p className="text-slate-500 mt-2">Explore the world's best universities with us.</p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <Link href={`/destinations/${country.name.toLowerCase()}`} key={index}>
              <div 
                key={index}
                className={`group cursor-pointer bg-slate-50 p-8 rounded-2xl border-l-8 ${country.color} hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-4xl">{country.flag}</span>
                    <h3 className="text-2xl font-bold text-slate-800 mt-4 group-hover:text-brand-blue">
                      Study in {country.name}
                    </h3>
                    <p className="text-slate-500 mt-1">
                      <span className="font-bold text-brand-red">{country.students}</span> Students Placed
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            ))}
        </div>

      </div>
    </section>
  );
}