'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // FIX 1: Capture the form reference immediately. 
    // event.currentTarget becomes null after the first 'await'.
    const form = event.currentTarget; 
    
    setLoading(true);
    setMessage(null);

    const formData = new FormData(form);
    const data = {
      full_name: formData.get('full_name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      desired_country: formData.get('desired_country'),
      message: formData.get('message'),
    };

    try {
      // FIX 2: Clean the API URL to prevent double slashes //
      let apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tasbih-global.onrender.com';
      if (apiUrl.endsWith('/')) apiUrl = apiUrl.slice(0, -1);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); 
      
      const response = await fetch(`${apiUrl}/api/inquiry/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // FIX 3: response.ok handles status codes 200-299 (including 201 Created)
      if (response.ok) {
        setMessage({ type: 'success', text: 'Thank you! Your message has been sent to Tasbih Global.' });
        form.reset(); // Use our captured form variable
      } else {
        const errorData = await response.json().catch(() => ({}));
        setMessage({ 
          type: 'error', 
          text: errorData.message || 'Submission failed. Please check your details.' 
        });
      }
    } catch (err) {
      console.error('Form submission error:', err);
      const errorMessage = err instanceof Error && err.name === 'AbortError' 
        ? 'Request timed out. Please try again.'
        : 'Unable to connect to the server. Please try again later.';
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white font-tahoma">
      <Navbar />

      <header className="pt-32 pb-20 bg-brand-blue text-white text-center">
        <h1 className="text-[3rem] font-extrabold uppercase">Get In <span className="text-brand-red">Touch</span></h1>
        <p className="mt-4 text-blue-100 px-4">Have questions? Our experts are here to guide you every step of the way.</p>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={<Phone className="text-brand-red" />} 
                  title="Call Us" 
                  detail="+880 1337 105605" 
                />
                <ContactInfoItem 
                  icon={<Mail className="text-brand-red" />} 
                  title="Email Us" 
                  detail="info.tasbihglobal@gmail.com" 
                />
                <ContactInfoItem 
                  icon={<MapPin className="text-brand-red" />} 
                  title="Visit Office" 
                  detail="399/B (3rd Floor), Shahid Baki Road, Malibagh Chowdhuripara, Khilgaon, Dhaka-1219, Bangladesh" 
                />
                <ContactInfoItem 
                  icon={<Clock className="text-brand-red" />} 
                  title="Working Hours" 
                  detail="Sat - Thu: 10:00 AM - 7:00 PM" 
                />
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl">
              <h3 className="font-bold text-brand-blue mb-4">Follow Our Updates</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white border flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-white transition-all cursor-pointer">f</div>
                <div className="w-10 h-10 bg-white border flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-white transition-all cursor-pointer">in</div>
                <div className="w-10 h-10 bg-white border flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-white transition-all cursor-pointer">ig</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-brand-blue mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Name</label>
                <input name="full_name" type="text" required placeholder="Enter name" className="w-full p-4 bg-slate-50 border rounded-xl outline-brand-blue" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input name="phone" type="text" required placeholder="+880" className="w-full p-4 bg-slate-50 border rounded-xl outline-brand-blue" />
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input name="email" type="email" required placeholder="example@gmail.com" className="w-full p-4 bg-slate-50 border rounded-xl outline-brand-blue" />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject / Desired Country</label>
                <select name="desired_country" className="w-full p-4 bg-slate-50 border rounded-xl outline-brand-blue appearance-none">
                  <option value="UK">United Kingdom</option>
                  <option value="USA">USA</option>
                  <option value="CAN">Canada</option>
                  <option value="AUS">Australia</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea name="message" rows={5} placeholder="How can we help you?" className="w-full p-4 bg-slate-50 border rounded-xl outline-brand-blue"></textarea>
              </div>
              
              <div className="md:col-span-2">
                {message && (
                  <div className={`mb-6 p-4 rounded-xl text-sm font-bold ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {message.text}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-red transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <>Send Message <Send size={18} /></>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="h-[450px] w-full grayscale hover:grayscale-0 transition-all duration-700 border-t">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902344733364!2d90.4184643!3d23.7508608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b87063493e81%3A0xc023c7136f4d360!2sTasbih%20Global!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
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