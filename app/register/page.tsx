import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Register() {
  return (
    <main className="min-h-screen bg-slate-50 font-tahoma">
      <Navbar />
      <div className="pt-32 pb-10 text-center">
        <h1 className="text-3xl font-bold text-brand-blue">Start Your Journey</h1>
        <p className="text-slate-500">Register today for a free assessment</p>
      </div>
      <ContactForm /> {/* Re-using your contact form component here */}
      <Footer />
    </main>
  );
}