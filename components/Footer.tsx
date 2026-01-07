import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 font-tahoma">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* COLUMN 1: BRAND */}
          <div className="space-y-4">
              <div className="text-2xl font-bold">
                <div className={`relative transition-all duration-500 w-[200px]`}>
                  {/* Using your Image tag here */}
                  <img src="/images/Logo.png" alt="Tasbih Global Logo" className="object-contain transition-all duration-500" />
                </div>
              </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for international education. We bridge the gap between your dreams and global opportunities.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-brand-red w-fit">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/destinations" className="hover:text-white transition">Study Destinations</Link></li>
              <li><Link href="/course-finder" className="hover:text-white transition">Course Finder</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: DESTINATIONS */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-brand-red w-fit">Destinations</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer">Study in USA</li>
              <li className="hover:text-white cursor-pointer">Study in UK</li>
              <li className="hover:text-white cursor-pointer">Study in Australia</li>
              <li className="hover:text-white cursor-pointer">Study in Canada</li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-brand-red w-fit">Contact Us</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span> Dhaka, Bangladesh / Sydney, AU
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> +880 1XXX-XXXXXX
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> info@tasbihglobal.com
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center">
            © 2026 Tasbih Global. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-xs">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}