import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  const services = [
    { title: "Student Counseling", desc: "One-on-one sessions to map out your career and university path.", icon: "🎓" },
    { title: "University Admission", desc: "Expert help with applications, SOPs, and LORs for top universities.", icon: "📝" },
    { title: "Visa Guidance", desc: "High success rate visa processing for USA, UK, and Australia.", icon: "🛂" },
    { title: "Scholarship Support", desc: "We find and help you apply for merit-based financial aid.", icon: "💰" },
  ];

  return (
    <main className="min-h-screen bg-white font-tahoma">
      <Navbar />
      <header className="pt-40 pb-20 bg-brand-blue text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase">Our <span className="text-brand-red">Services</span></h1>
        <p className="mt-4 text-blue-100">Comprehensive support from application to arrival.</p>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-10 border rounded-3xl hover:shadow-xl transition-all group">
            <span className="text-5xl">{s.icon}</span>
            <h3 className="text-2xl font-bold mt-6 text-brand-blue group-hover:text-brand-red transition-colors">{s.title}</h3>
            <p className="text-slate-600 mt-4 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}