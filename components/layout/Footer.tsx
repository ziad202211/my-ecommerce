import Link from 'next/link';
import { Send } from 'lucide-react';

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">

          {/* Column 1: Exclusive */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Exclusive</h3>
            <h4 className="text-base font-medium mb-4">Subscribe</h4>
            <p className="text-sm font-light mb-4">Get 10% off your first order</p>
            <div className="relative w-full max-w-[250px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white rounded py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col">
            <h3 className="text-xl font-medium mb-6">Support</h3>
            <p className="text-sm font-light mb-4 leading-relaxed">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-sm font-light mb-4">exclusive@gmail.com</p>
            <p className="text-sm font-light">+88015-88888-9999</p>
          </div>

          {/* Column 3: Account */}
          <div className="flex flex-col">
            <h3 className="text-xl font-medium mb-6">Account</h3>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><Link href="/account" className="hover:text-gray-300 transition-colors">My Account</Link></li>
              <li><Link href="/login" className="hover:text-gray-300 transition-colors">Login / Register</Link></li>
              <li><Link href="/cart" className="hover:text-gray-300 transition-colors">Cart</Link></li>
              <li><Link href="/products" className="hover:text-gray-300 transition-colors">Products</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div className="flex flex-col">
            <h3 className="text-xl font-medium mb-6">Quick Link</h3>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-300 transition-colors">Terms Of Use</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div className="flex flex-col">
            <h3 className="text-xl font-medium mb-6">Download App</h3>
            <p className="text-xs font-medium text-gray-400 mb-2">Save $3 with App New User Only</p>

            <div className="flex gap-2 mb-6">
              {/* QR Code Placeholder/Mock */}
              <div className="w-[80px] h-[80px] bg-white rounded flex items-center justify-center p-1">
                <svg viewBox="0 0 21 21" width="100%" height="100%" shapeRendering="crispEdges">
                  <rect x="0" y="0" width="7" height="7" fill="black" />
                  <rect x="1" y="1" width="5" height="5" fill="white" />
                  <rect x="2" y="2" width="3" height="3" fill="black" />

                  <rect x="14" y="0" width="7" height="7" fill="black" />
                  <rect x="15" y="1" width="5" height="5" fill="white" />
                  <rect x="16" y="2" width="3" height="3" fill="black" />

                  <rect x="0" y="14" width="7" height="7" fill="black" />
                  <rect x="1" y="15" width="5" height="5" fill="white" />
                  <rect x="2" y="16" width="3" height="3" fill="black" />

                  <path fill="black" d="M8,0 h1 v1 h-1 z M10,0 h2 v1 h-2 z M13,0 h1 v1 h-1 z M8,2 h2 v1 h-2 z M11,2 h1 v1 h-1 z M13,2 h1 v1 h-1 z M8,4 h1 v1 h-1 z M10,4 h1 v1 h-1 z M12,4 h2 v1 h-2 z M9,5 h2 v1 h-2 z M12,5 h1 v1 h-1 z M8,6 h2 v1 h-2 z M11,6 h1 v1 h-1 z M13,6 h1 v1 h-1 z M0,8 h1 v1 h-1 z M2,8 h2 v1 h-2 z M5,8 h1 v1 h-1 z M7,8 h1 v1 h-1 z M9,8 h3 v1 h-3 z M13,8 h2 v1 h-2 z M16,8 h1 v1 h-1 z M18,8 h3 v1 h-3 z M1,9 h2 v1 h-2 z M4,9 h1 v1 h-1 z M6,9 h2 v1 h-2 z M10,9 h1 v1 h-1 z M12,9 h1 v1 h-1 z M14,9 h1 v1 h-1 z M17,9 h2 v1 h-2 z M20,9 h1 v1 h-1 z M0,10 h2 v1 h-2 z M3,10 h1 v1 h-1 z M5,10 h2 v1 h-2 z M8,10 h1 v1 h-1 z M10,10 h2 v1 h-2 z M14,10 h2 v1 h-2 z M17,10 h1 v1 h-1 z M19,10 h1 v1 h-1 z M0,11 h1 v1 h-1 z M2,11 h1 v1 h-1 z M4,11 h2 v1 h-2 z M7,11 h1 v1 h-1 z M9,11 h1 v1 h-1 z M11,11 h2 v1 h-2 z M15,11 h1 v1 h-1 z M18,11 h2 v1 h-2 z M1,12 h1 v1 h-1 z M3,12 h2 v1 h-2 z M6,12 h2 v1 h-2 z M9,12 h1 v1 h-1 z M12,12 h3 v1 h-3 z M16,12 h1 v1 h-1 z M19,12 h2 v1 h-2 z M0,13 h3 v1 h-3 z M4,13 h1 v1 h-1 z M7,13 h2 v1 h-2 z M10,13 h1 v1 h-1 z M13,13 h2 v1 h-2 z M16,13 h2 v1 h-2 z M19,13 h1 v1 h-1 z M8,14 h1 v1 h-1 z M10,14 h2 v1 h-2 z M14,14 h1 v1 h-1 z M16,14 h1 v1 h-1 z M18,14 h2 v1 h-2 z M9,15 h2 v1 h-2 z M12,15 h1 v1 h-1 z M15,15 h2 v1 h-2 z M19,15 h1 v1 h-1 z M8,16 h1 v1 h-1 z M10,16 h1 v1 h-1 z M12,16 h2 v1 h-2 z M15,16 h1 v1 h-1 z M17,16 h1 v1 h-1 z M20,16 h1 v1 h-1 z M9,17 h1 v1 h-1 z M11,17 h2 v1 h-2 z M14,17 h1 v1 h-1 z M16,17 h2 v1 h-2 z M19,17 h1 v1 h-1 z M8,18 h2 v1 h-2 z M12,18 h1 v1 h-1 z M14,18 h2 v1 h-2 z M17,18 h1 v1 h-1 z M20,18 h1 v1 h-1 z M8,19 h1 v1 h-1 z M10,19 h3 v1 h-3 z M15,19 h1 v1 h-1 z M18,19 h2 v1 h-2 z M9,20 h2 v1 h-2 z M12,20 h1 v1 h-1 z M14,20 h2 v1 h-2 z M17,20 h1 v1 h-1 z M19,20 h1 v1 h-1 z" />
                </svg>
              </div>

              {/* App Store Buttons Placeholder */}
              <div className="flex flex-col justify-between">
                <div className="w-[110px] h-[36px] bg-white rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold text-black text-center">GET IT ON <br />Google Play</span>
                </div>
                <div className="w-[110px] h-[36px] bg-white rounded flex items-center justify-center">
                  <span className="text-[9px] font-bold text-black text-center leading-tight">Download on the <br />App Store</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-2">
              <Link href="#" className="hover:text-gray-300 transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-gray-300 transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-gray-300 transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-gray-300 transition-colors"><Linkedin className="w-5 h-5" /></Link>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#141414] pt-4 text-center opacity-40">
          <p className="text-sm flex items-center justify-center gap-2">
            <span className="text-lg">©</span> Copyright 2026. All right reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
