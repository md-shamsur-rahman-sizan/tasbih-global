import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const countries = [
  { 
    id: "usa", 
    name: "USA", 
    description: "Home to Ivy League excellence and diverse opportunities.", 
    image: "/images/destinations/usa.jpg", 
    flag: "🇺🇸" 
  },
  { 
    id: "uk", 
    name: "United Kingdom", 
    description: "A rich heritage of world-class education and research.", 
    image: "/images/destinations/uk.jpg", 
    flag: "🇬🇧" 
  },
  { 
    id: "australia", 
    name: "Australia", 
    description: "Top-ranked universities with a vibrant, sunny lifestyle.", 
    image: "/images/destinations/australia.jpg", 
    flag: "🇦🇺" 
  },
  { 
    id: "canada", 
    name: "Canada", 
    description: "Friendly atmosphere with excellent post-study work paths.", 
    image: "/images/destinations/canada.jpg", 
    flag: "🇨🇦" 
  }
];

export default function StudyDestinations() {
  return (
    <main className="min-h-screen bg-slate-50 font-tahoma">
      <Navbar />
      
      {/* Header Section */}
      <header className="pt-40 pb-20 bg-brand-blue text-white text-center">
        <h1 className="text-[3rem] font-extrabold uppercase tracking-tight">
          Study <span className="text-brand-red">Destinations</span>
        </h1>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto px-4">
          Explore world-class education opportunities across the globe. Choose your dream destination and start your journey today.
        </p>
      </header>

      {/* Destinations Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <Link 
              key={country.id} 
              href={`/destinations/${country.id}`}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <div className="absolute top-4 left-4 z-20 bg-white/90 px-3 py-1 rounded-full text-xl">
                  {country.flag}
                </div>
                {/* Fallback color if image is missing, replace with <Image /> when ready */}
                <div className="absolute inset-0 bg-slate-300 animate-pulse" />
                <img 
                   src={country.image} 
                   alt={country.name}
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-blue group-hover:text-brand-red transition-colors">
                  {country.name}
                </h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  {country.description}
                </p>
                <div className="mt-6 flex items-center font-bold text-brand-blue text-sm">
                  LEARN MORE 
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}