import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Globe, 
  Clock, 
  DollarSign,
  GraduationCap, 
  CheckCircle,
  ClipboardCheck,
  ArrowRight
} from "lucide-react";

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const resolvedParams = await params;
  const country = resolvedParams.country;
  const countryName = country.charAt(0).toUpperCase() + country.slice(1);

  // 1. Data Definitions
  const countryData = {
    name: country.toUpperCase(),
    title: `Study in ${countryName}`,
    heroImage: `/images/destinations/${country}-hero.jpg`,
    description: `International students choose to study in ${countryName} due to its world-class education system, vibrant culture, and excellent career prospects. Whether you're looking for undergraduate or postgraduate programs, ${countryName} offers a wide range of options across various disciplines.`,
    quickFacts: {
      capital: country === "usa" ? "Washington, D.C." : country === "uk" ? "London" : "Varies",
      currency: country === "usa" ? "USD" : country === "uk" ? "GBP" : "AUD",
      intakes: "Feb, July, Nov",
      workRights: "20-40 hours/fortnight",
    },
    benefits: [
      "Globally recognized degrees",
      "Post-study work opportunities",
      "Multicultural environment",
      "High standard of living",
    ]
  };

  const checklistItems = [
    { title: "Valid Passport", desc: "Must be valid for at least 6 months beyond your stay." },
    { title: "Academic Transcripts", desc: "Verified copies of your previous certificates and grades." },
    { title: "English Proficiency", desc: "Valid IELTS, PTE, or TOEFL score report." },
    { title: "Statement of Purpose", desc: "A well-written essay explaining your goals and motivation." },
    { title: "Proof of Funds", desc: "Bank statements showing you can cover tuition and living costs." },
    { title: "Health Insurance", desc: "Mandatory student health cover as per country regulations." },
  ];

  return (
    <main className="min-h-screen bg-white font-tahoma">
      <Navbar />

      {/* --- SECTION 1: HERO BANNER --- */}
      <div className="relative h-[60vh] w-full flex items-center justify-center pt-30">
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        <div className="absolute inset-0 bg-brand-blue/20 z-10" />
        <div className="absolute inset-0 bg-slate-300" /> {/* Placeholder for Hero Image */}
        
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-[3.5rem] md:text-[4rem] font-extrabold uppercase mb-4 leading-tight">
            {countryData.title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-medium opacity-90">
            Everything you need to know about pursuing your education in {countryData.name}.
          </p>
        </div>
      </div>

      {/* --- SECTION 2: CONTENT & SIDEBAR --- */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6 border-l-4 border-brand-red pl-4">
                Why Study in {countryName}?
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {countryData.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {countryData.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-blue-50 rounded-2xl border border-blue-100 transition-hover hover:bg-blue-100">
                  <div className="text-brand-red mt-1">
                    <CheckCircle size={22} />
                  </div>
                  <span className="font-bold text-brand-blue">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-8 border-l-4 border-brand-red bg-slate-50 rounded-r-2xl shadow-sm">
              <h3 className="text-xl font-bold text-brand-blue mb-2">Admission Requirements</h3>
              <p className="text-slate-600 italic">
                Entry requirements vary by institution. Generally, you will need academic transcripts, English proficiency test scores (IELTS/PTE), and a valid passport.
              </p>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-brand-blue mb-8 pb-4 border-b">Quick Facts</h3>
              
              <div className="space-y-6">
                <FactItem icon={<Globe size={24} />} label="Capital" value={countryData.quickFacts.capital} color="bg-blue-100 text-brand-blue" />
                <FactItem icon={<Clock size={24} />} label="Major Intakes" value={countryData.quickFacts.intakes} color="bg-red-100 text-brand-red" />
                <FactItem icon={<DollarSign size={24} />} label="Currency" value={countryData.quickFacts.currency} color="bg-green-100 text-green-600" />
                <FactItem icon={<GraduationCap size={24} />} label="Work Rights" value={countryData.quickFacts.workRights} color="bg-purple-100 text-purple-600" />
              </div>

              <button className="w-full mt-10 bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-red transition-all shadow-lg hover:-translate-y-1">
                Apply for {countryData.name}
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* --- SECTION 3: ADMISSION CHECKLIST --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue uppercase">
              Admission <span className="text-brand-red">Checklist</span>
            </h2>
            <p className="text-slate-500 mt-4">Essential documents you'll need for your application to {countryName}.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {checklistItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 relative group overflow-hidden">
                <div className="absolute -top-2 -right-2 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-brand-blue">
                  <ClipboardCheck size={80} />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg text-brand-blue">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-brand-blue rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to start your application?</h3>
              <p className="text-blue-100">Our counselors will guide you through every document on this list.</p>
            </div>
            <button className="bg-brand-red hover:bg-white hover:text-brand-red text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 whitespace-nowrap shadow-lg">
              Get Started Now <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Helper component for Fact Items to keep code clean
function FactItem({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase text-slate-400 font-bold tracking-widest">{label}</p>
        <p className="font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}