
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[7]; // Default to first for static demo
  const [mainImage, setMainImage] = useState(product.image);

  return (
    <div className="bg-bg-main min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-text-muted mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="material-icons-outlined text-sm mx-2">chevron_right</span>
          <Link to="/listing" className="hover:text-primary">Electronics</Link>
          <span className="material-icons-outlined text-sm mx-2">chevron_right</span>
          <span>{product.name}</span>
        </div>

        <div className="bg-white border border-border-main rounded-md p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Gallery */}
            <div className="lg:col-span-4 space-y-4">
              <div className="aspect-square border rounded p-4 flex items-center justify-center bg-white">
                <img alt={product.name} className="max-h-full max-w-full object-contain" src={mainImage} />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[product.image, product.image, product.image, product.image, product.image].map((img, i) => (
                  <div key={i} onClick={() => setMainImage(img)} className={`aspect-square border rounded p-1 flex items-center justify-center cursor-pointer hover:border-primary transition ${mainImage === img ? 'border-primary' : ''}`}>
                    <img alt="Thumbnail" className="max-h-full max-w-full object-contain" src={img} />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5">
              <span className="text-secondary font-medium text-sm mb-2 block"><span className="material-icons-outlined text-sm align-middle">check</span> In stock</span>
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
                <div className="flex items-center text-orange-400">
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star_half</span>
                  <span className="ml-2 font-bold text-orange-500">{product.rating}</span>
                </div>
                <span>•</span>
                <span>{product.reviewsCount} reviews</span>
                <span>•</span>
                <span>{product.soldCount} sold</span>
              </div>

              <div className="bg-red-50 p-4 rounded flex items-center gap-8 mb-6">
                <div>
                  <div className="text-2xl font-bold text-red-500">${product.price.toFixed(2)}</div>
                  <div className="text-xs text-text-muted">50-100 pcs</div>
                </div>
                <div className="border-l border-gray-300 h-8"></div>
                <div>
                  <div className="text-xl font-bold">${(product.price * 0.9).toFixed(2)}</div>
                  <div className="text-xs text-text-muted">100-700 pcs</div>
                </div>
                <div className="border-l border-gray-300 h-8"></div>
                <div>
                  <div className="text-xl font-bold">${(product.price * 0.8).toFixed(2)}</div>
                  <div className="text-xs text-text-muted">700+ pcs</div>
                </div>
              </div>

              <div className="space-y-3 text-sm pb-6 border-b">
                <div className="flex"><span className="w-24 text-text-muted">Price:</span> <span>Negotiable</span></div>
                <div className="flex"><span className="w-24 text-text-muted">Type:</span> <span>Classic style</span></div>
                <div className="flex"><span className="w-24 text-text-muted">Material:</span> <span>Premium material</span></div>
                <div className="flex"><span className="w-24 text-text-muted">Design:</span> <span>Modern nice</span></div>
              </div>
            </div>

            {/* Supplier Card */}
            <div className="lg:col-span-3">
              <div className="border border-border-main rounded p-4 space-y-4">
                <div className="flex items-center gap-3 border-b pb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded text-primary flex items-center justify-center font-bold text-xl">R</div>
                  <div>
                    <h3 className="font-bold">Supplier</h3>
                    <p className="text-xs text-text-muted">Guanjoi Trading LLC</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-text-muted">
                  <div className="flex items-center gap-2"><img alt="flag" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqaTuzimcAE-CKeo1QditV9_Pynn8VZhSfSK7MxE1d_Af-wY77gy8uX3S1-qaK__NiIASVtofGgmHj54hoB19yLRviFeBilxRnwy4XSp36Sd0k2542CWgL5wRZlO75qD5hoU4sG0WvajP_AMcFK30rHhx8VeINBi10-pg4c6RH0X0VyzS6IPVHUxLwlIBUa9FOT030af5srnxBGh-63O8gUZal7An9KSpZ_YYQbsj4aJ5cIHrhWxWOZH7XgRjcUjFj_G1mxVjGSO8" /> Germany, Berlin</div>
                  <div className="flex items-center gap-2"><span className="material-icons-outlined text-sm">verified</span> Verified Seller</div>
                  <div className="flex items-center gap-2"><span className="material-icons-outlined text-sm">public</span> Worldwide shipping</div>
                </div>
                <div className="space-y-2 pt-2">
                  <button className="w-full bg-primary text-white font-bold py-2 rounded hover:bg-blue-600 transition">Send inquiry</button>
                  <button className="w-full bg-white border border-border-main text-primary font-bold py-2 rounded hover:bg-gray-50 transition">Seller's profile</button>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 mt-4 text-primary font-medium hover:underline">
                <span className="material-icons-outlined">favorite_border</span> Save for later
              </button>
            </div>
          </div>
        </div>

        {/* Description Tabs */}
        <div className="bg-white border border-border-main rounded-md overflow-hidden">
          <div className="flex border-b text-sm font-medium">
            {["Description", "Reviews", "Shipping", "About seller"].map((tab, i) => (
              <button key={tab} className={`px-6 py-4 transition ${i === 0 ? 'border-b-2 border-primary text-primary' : 'text-text-muted hover:text-primary'}`}>{tab}</button>
            ))}
          </div>
          <div className="p-8 text-text-muted text-sm leading-relaxed space-y-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <div className="max-w-xl border rounded overflow-hidden">
              <div className="grid grid-cols-2 border-b bg-gray-50 p-2 px-4"><span className="font-medium">Model</span> <span>#8786867</span></div>
              <div className="grid grid-cols-2 border-b p-2 px-4"><span className="font-medium">Style</span> <span>Classic style</span></div>
              <div className="grid grid-cols-2 p-2 px-4"><span className="font-medium">Certificate</span> <span>ISO-898921212</span></div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><span className="material-icons text-sm">check</span> Some great feature name here</li>
              <li className="flex items-center gap-2"><span className="material-icons text-sm">check</span> Lorem ipsum dolor sit amet, consectetur</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
