import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-white font-tahoma">
      <Navbar />
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-brand-blue mb-6">About <span className="text-brand-red">Tasbih Global</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Founded in 2026, Tasbih Global was built with one mission: to make international education accessible for every student in Bangladesh and beyond.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-brand-red text-2xl">100%</h4>
                <p className="text-sm text-slate-500">Commitment</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-brand-red text-2xl">Global</h4>
                <p className="text-sm text-slate-500">Network</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-slate-200 h-96 rounded-3xl flex items-center justify-center text-slate-400 italic">
            [ Company Photo / Office Photo ]
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}