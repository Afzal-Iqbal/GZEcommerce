
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COUNTRIES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[3]); // Default Germany
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-border-main sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-primary text-white rounded-lg p-2 flex items-center justify-center shadow-md shadow-primary/20">
                <span className="material-icons-outlined text-3xl">shopping_basket</span>
              </div>
              <span className="text-2xl font-black text-text-main tracking-tight">BRAND</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="flex border-2 border-primary rounded-lg overflow-hidden h-[46px] shadow-sm">
                <input
                  className="w-full px-4 border-none focus:ring-0 outline-none text-sm placeholder:text-gray-400"
                  placeholder="Search products..."
                  type="text"
                />
                <div className="relative border-l border-primary hidden sm:block">
                  <select className="h-full px-4 pr-8 bg-white text-sm font-medium outline-none appearance-none cursor-pointer">
                    <option>All categories</option>
                    <option>Electronics</option>
                    <option>Clothes</option>
                    <option>Accessories</option>
                  </select>
                  <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">expand_more</span>
                </div>
                <button className="bg-primary text-white px-8 h-full font-bold hover:bg-blue-600 transition-colors active:scale-95">
                  Search
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-5 text-text-muted">
              <Link to="/profile" className="flex flex-col items-center cursor-pointer hover:text-primary transition group">
                <span className="material-icons-outlined text-[26px]">person</span>
                <span className="text-[11px] font-medium mt-1">Profile</span>
              </Link>
              <Link to="/messages" className="flex flex-col items-center cursor-pointer hover:text-primary transition group">
                <span className="material-icons-outlined text-[26px]">chat_bubble_outline</span>
                <span className="text-[11px] font-medium mt-1">Message</span>
              </Link>
              <Link to="/orders" className="flex flex-col items-center cursor-pointer hover:text-primary transition group">
                <span className="material-icons-outlined text-[26px]">favorite_border</span>
                <span className="text-[11px] font-medium mt-1">Orders</span>
              </Link>
              <Link to="/cart" className="flex flex-col items-center cursor-pointer hover:text-primary transition group">
                <span className="material-icons-outlined text-[26px]">shopping_cart</span>
                <span className="text-[11px] font-medium mt-1">My cart</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Nav Bar */}
        <div className="border-t border-border-main bg-white">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center text-[15px] font-semibold text-text-main">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 cursor-pointer hover:text-primary group">
                <span className="material-icons-outlined text-xl">menu</span> 
                <span>All category</span>
              </div>
              <Link to="/listing" className="hover:text-primary transition-colors">Hot offers</Link>
              <Link to="/listing" className="hover:text-primary transition-colors">Gift boxes</Link>
              <Link to="/listing" className="hover:text-primary transition-colors">Projects</Link>
              <Link to="/listing" className="hover:text-primary transition-colors">Menu item</Link>
              <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors group">
                Help <span className="material-icons-outlined text-sm group-hover:rotate-180 transition-transform">expand_more</span>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors group">
                English, USD <span className="material-icons-outlined text-sm group-hover:rotate-180 transition-transform">expand_more</span>
              </div>
              <div 
                className="flex items-center gap-2 cursor-pointer hover:text-primary group transition-colors"
                onClick={() => setIsCountryModalOpen(true)}
              >
                Ship to 
                <img 
                  alt={selectedCountry.name} 
                  className="w-6 h-4 object-cover rounded shadow-sm border border-gray-100" 
                  src={`https://flagcdn.com/w40/${selectedCountry.code}.png`} 
                />
                <span className="material-icons-outlined text-sm group-hover:rotate-180 transition-transform">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border-main pt-16">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary text-white rounded-lg p-1.5 shadow-sm">
                  <span className="material-icons-outlined text-2xl">shopping_basket</span>
                </div>
                <span className="text-2xl font-black text-text-main">BRAND</span>
              </div>
              <p className="text-text-muted text-[15px] leading-relaxed mb-8 max-w-[240px]">
                The world's largest B2B e-commerce marketplace for manufacturers and buyers.
              </p>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map(icon => (
                  <a key={icon} href="#" className="w-10 h-10 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                    <i className={`fab fa-${icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-text-main">About</h4>
              <ul className="space-y-3 text-[15px] text-text-muted">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Find store</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-text-main">Partnership</h4>
              <ul className="space-y-3 text-[15px] text-text-muted">
                <li><a href="#" className="hover:text-primary transition-colors">Become a Seller</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Global Suppliers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Logistics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-text-main">Information</h4>
              <ul className="space-y-3 text-[15px] text-text-muted">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Money Refund</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-text-main">Get app</h4>
              <div className="space-y-3">
                <button className="bg-[#1c1c1c] text-white px-5 py-3 rounded-lg flex items-center gap-3 w-full max-w-[170px] hover:bg-black transition-colors shadow-lg">
                  <span className="material-icons-outlined text-2xl">apple</span>
                  <div className="text-left leading-tight">
                    <span className="text-[10px] block uppercase tracking-wider opacity-70">Available on</span>
                    <span className="font-bold text-[15px]">App Store</span>
                  </div>
                </button>
                <button className="bg-[#1c1c1c] text-white px-5 py-3 rounded-lg flex items-center gap-3 w-full max-w-[170px] hover:bg-black transition-colors shadow-lg">
                  <span className="material-icons-outlined text-2xl">android</span>
                  <div className="text-left leading-tight">
                    <span className="text-[10px] block uppercase tracking-wider opacity-70">Get it on</span>
                    <span className="font-bold text-[15px]">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-border-main pt-8 flex flex-col md:flex-row justify-between items-center text-[14px] text-text-muted">
            <p>© 2023 Brand Inc. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <img alt="USA" className="h-4 w-6 object-cover rounded-sm shadow-sm" src="https://flagcdn.com/w40/us.png" />
                English
              </span>
              <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Terms of Use</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Country Modal */}
      {isCountryModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-all animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in duration-300">
            <div className="p-5 border-b flex justify-between items-center bg-gray-50/50">
              <h3 className="font-black text-xl text-text-main tracking-tight">Shipping Destination</h3>
              <button 
                onClick={() => setIsCountryModalOpen(false)} 
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-black transition-all"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            <div className="p-4 max-h-[60vh] overflow-y-auto grid grid-cols-1 gap-2 custom-scrollbar">
              {COUNTRIES.map((c) => (
                <button 
                  key={c.code}
                  onClick={() => {
                    setSelectedCountry(c);
                    setIsCountryModalOpen(false);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${selectedCountry.code === c.code ? 'border-primary bg-blue-50/50 shadow-sm' : 'border-transparent hover:border-gray-200 hover:bg-gray-50'}`}
                >
                  <img alt={c.name} className="w-10 h-7 object-cover rounded shadow-sm" src={`https://flagcdn.com/w80/${c.code}.png`} />
                  <span className="font-bold text-text-main">{c.name}</span>
                  {selectedCountry.code === c.code && <span className="material-icons text-primary ml-auto">check_circle</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
