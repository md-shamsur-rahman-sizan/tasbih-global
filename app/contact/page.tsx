import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-tahoma">
      <Navbar />

      {/* Header */}
      <header className="pt-50 pb-20 bg-brand-blue text-white text-center">
        <h1 className="text-[3rem] font-extrabold uppercase">Get In <span className="text-brand-red">Touch</span></h1>
        <p className="mt-4 text-blue-100 px-4">Have questions? Our experts are here to guide you every step of the way.</p>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* 1. Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={<Phone className="text-brand-red" />} 
                  title="Call Us" 
                  detail="+880 1XXX XXXXXX" 
                />
                <ContactInfoItem 
                  icon={<Mail className="text-brand-red" />} 
                  title="Email Us" 
                  detail="info@tasbihglobal.com" 
                />
                <ContactInfoItem 
                  icon={<MapPin className="text-brand-red" />} 
                  title="Visit Office" 
                  detail="Level 4, Building Name, Road Name, Dhaka, Bangladesh" 
                />
                <ContactInfoItem 
                  icon={<Clock className="text-brand-red" />} 
                  title="Working Hours" 
                  detail="Sat - Thu: 10:00 AM - 7:00 PM" 
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-slate-50 rounded-3xl">
              <h3 className="font-bold text-brand-blue mb-4">Follow Our Updates</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white border flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-white transition-all cursor-pointer">f</div>
                <div className="w-10 h-10 bg-white border flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-white transition-all cursor-pointer">in</div>
                <div className="w-10 h-10 bg-white border flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-white transition-all cursor-pointer">ig</div>
              </div>
            </div>
          </div>

          {/* 2. Message Form */}
          <div className="lg:col-span-2 bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-brand-blue mb-8">Send us a Message</h2>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Name</label>
                <input type="text" placeholder="Enter name" className="w-full p-4 bg-slate-50 border rounded-xl outline-brand-blue" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input type="text" placeholder="+880" className="w-full p-4 bg-slate-50 border rounded-xl outline-brand-blue" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <select className="w-full p-4 bg-slate-50 border rounded-xl outline-brand-blue appearance-none">
                  <option>General Inquiry</option>
                  <option>Admission Support</option>
                  <option>Visa Assistance</option>
                  <option>Scholarship Info</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full p-4 bg-slate-50 border rounded-xl outline-brand-blue"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-red transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Integration */}
      <section className="h-[450px] w-full grayscale hover:grayscale-0 transition-all duration-700 border-t">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.90244243014!2d90.39126607532454!3d23.75085807867205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89796e62491%3A0x696b949219e9e62e!2sFarmgate%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
        />
      </section>

      <Footer />
    </main>
  );
}

function ContactInfoItem({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</p>
        <p className="font-bold text-brand-blue text-lg">{detail}</p>
      </div>
    </div>
  );
}