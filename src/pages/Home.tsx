
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Hero Section */}
      <div className="bg-white border border-border-main rounded-md p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-3 hidden lg:block">
          <ul className="space-y-1">
            {["Automobiles", "Clothes and wear", "Home interiors", "Computer and tech", "Tools, equipments", "Sports and outdoor", "Animal and pets", "Machinery tools", "More category"].map((cat, idx) => (
              <li key={idx} className={`p-2 rounded-md cursor-pointer transition ${idx === 0 ? 'bg-blue-50 text-primary font-medium' : 'hover:bg-gray-100 text-gray-600'}`}>
                {cat}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 relative h-64 lg:h-auto rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB89cRUHXncs2PEFqh1O6YwAoKb4Asv940Ej4A2PXzj6_IMwyCMkWngE5FmtjZRmBLkI8rf9YFyncpwGygj1gZf5xDZJwRip2Sz-VhKyT2zQUvG9ONSH6hbyltnb-vHICELg6ubGWDIar_8cUvtbE8DuUFKhdcbbYkGkfEW2NQLEg0l_fz80x6iB69RtsZsx-mdnPqO_gKP3zWb3WrluhwL2OmZCZAQmAcPfbdph9svvleC8J-bp4tr6sqv13bHPZqURvTp29mB7z8')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-transparent flex items-center px-8">
            <div>
              <h2 className="text-2xl font-light mb-1">Latest trending</h2>
              <h1 className="text-4xl font-bold mb-6">Electronic items</h1>
              <Link to="/listing" className="bg-white text-text-main px-6 py-2 rounded-md shadow-sm font-medium hover:bg-gray-50 transition inline-block">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-3">
          <div className="bg-blue-50 p-4 rounded-md h-1/2 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white"><span className="material-icons-outlined">person</span></div>
              <div className="text-sm">Hi, user<br/>let's get started</div>
            </div>
            <button className="bg-primary text-white w-full py-1.5 rounded-md text-sm font-medium hover:bg-blue-600 transition">Join now</button>
            <button className="bg-white text-primary border border-border-main w-full py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 transition">Log in</button>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-md text-sm font-medium h-24">Get US $10 off with a new supplier</div>
          <div className="bg-[#55BDC3] text-white p-4 rounded-md text-sm font-medium h-24">Send quotes with supplier preferences</div>
        </div>
      </div>

      {/* Deals Section */}
      <div className="bg-white border border-border-main rounded-md flex flex-col lg:flex-row overflow-hidden">
        <div className="p-6 lg:w-64 border-b lg:border-b-0 lg:border-r border-border-main flex flex-row lg:flex-col justify-between lg:justify-center items-center lg:items-start gap-4">
          <div>
            <h3 className="text-xl font-bold">Deals and offers</h3>
            <p className="text-text-muted text-sm">Hygiene equipments</p>
          </div>
          <div className="flex gap-2">
            {["04", "13", "34", "56"].map((t, i) => (
              <div key={i} className="bg-gray-600 text-white rounded w-11 h-12 flex flex-col items-center justify-center">
                <span className="font-bold text-sm">{t}</span>
                <span className="text-[10px]">{["Days", "Hour", "Min", "Sec"][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-x-auto">
          <div className="flex min-w-max h-full">
            {PRODUCTS.slice(0, 5).map((p, i) => (
              <Link key={i} to={`/product/${p.id}`} className="w-48 p-4 border-r border-border-main flex flex-col items-center text-center justify-between hover:bg-gray-50 transition">
                <img alt={p.name} className="h-32 object-contain p-2" src={p.image} />
                <div className="w-full">
                  <p className="text-sm truncate mb-2">{p.name}</p>
                  <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs font-bold">-25%</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Category Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          { title: "Home and outdoor", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOoxZZ4EHyKRMYtlv2HcJLiGb8U0zqgDbG2SglKAJ6RmMC4JOZlnKDa9dft5o6nh1cgfQBgxpRDf4tehOCC0O5Rfsq9lRrVyWv-BKgv27D10vQlKl5HuYsUxEPrBWLo-rcUSeiGB3ncbvDE1EPUTmikovSQ2hCmj5d5d9PCfGUcOATtLl2TaUuNs_MH4ZCE0f5E0mxVNyTe0v8Es5XIm1IL4II6cO-lC-4jBY4MuFVFpxAfxZhdIbda86Yr8JTM50WA7iGdwkbQqc", items: ["Soft chairs", "Sofa & chair", "Kitchen dishes", "Pottery"] },
          { title: "Consumer electronics", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFawr-dGeiZ-1iurkUSWqoqT0kJjQ4ADyuRqnnWWXcr8EfiFwTSj8-eKHgaPpirDZsto6k-KLwyqEQI-hwzVkrsiR5xMs1OwW8mTZWBHCRp3Th8vAx23CLrixxJ1Z4OMV90kcRykdjRTYgrn5qUB9nzdQe2jh46oACon4qflABleQ8dq4yD_zPu_uf301SH1xDfAPiurLsSDeSY5DJOHi1pkQtqcY_0WB8kPQNFCDEL4sibFsKCJhhAKDbWvCm4fsjytO_oOwZlcs", items: ["Smart watches", "Cameras", "Headphones", "Gaming set"] }
        ].map((cat, idx) => (
          <div key={idx} className="bg-white border border-border-main rounded-md flex flex-col md:flex-row overflow-hidden h-[260px]">
            <div className="md:w-1/3 p-6 bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: `url(${cat.bg})` }}>
              <h3 className="text-xl font-bold">{cat.title}</h3>
              <Link to="/listing" className="bg-white text-text-main text-sm font-medium px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition w-fit">Source now</Link>
            </div>
            <div className="md:w-2/3 grid grid-cols-2">
              {cat.items.map((item, i) => (
                <div key={i} className="border-l border-b last:border-b-0 p-4 flex flex-col justify-between cursor-pointer hover:bg-gray-50 transition">
                  <p className="text-sm font-medium">{item}</p>
                  <p className="text-xs text-text-muted">From USD 19</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Items */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Recommended items</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PRODUCTS.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="bg-white border border-border-main rounded-md p-4 hover:shadow-md transition flex flex-col">
              <div className="aspect-square mb-3 flex items-center justify-center">
                <img alt={p.name} className="max-h-full max-w-full object-contain" src={p.image} />
              </div>
              <div className="font-bold mb-1">${p.price.toFixed(2)}</div>
              <p className="text-sm text-text-muted line-clamp-2">{p.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
