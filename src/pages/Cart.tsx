
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Cart: React.FC = () => {
  const cartItems = [
    { ...PRODUCTS[0], quantity: 9 },
    { ...PRODUCTS[1], quantity: 3 },
    { ...PRODUCTS[2], quantity: 1 },
  ];

  return (
    <div className="bg-bg-main min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My cart ({cartItems.length})</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Item List */}
          <div className="flex-1 space-y-4">
            <div className="bg-white border border-border-main rounded-md divide-y overflow-hidden shadow-sm">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-20 h-20 bg-gray-100 rounded border p-2 flex items-center justify-center flex-shrink-0">
                    <img alt={item.name} className="max-h-full max-w-full object-contain" src={item.image} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-text-main hover:text-primary transition cursor-pointer">{item.name}</h3>
                        <p className="text-xs text-text-muted mt-1">Size: medium, Color: blue, Material: Plastic</p>
                        <p className="text-xs text-text-muted">Seller: Artel Market</p>
                      </div>
                      <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex gap-2">
                        <button className="text-xs font-bold text-red-500 border border-border-main px-3 py-1.5 rounded uppercase hover:bg-red-50 transition">Remove</button>
                        <button className="text-xs font-bold text-primary border border-border-main px-3 py-1.5 rounded uppercase hover:bg-blue-50 transition">Save for later</button>
                      </div>
                      <select className="border rounded p-1 text-sm bg-gray-50 outline-none" defaultValue={`Qty: ${item.quantity}`}>
                        <option>Qty: 1</option>
                        <option>Qty: 2</option>
                        <option>Qty: 3</option>
                        <option>Qty: 9</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-between items-center pt-2">
              <Link to="/listing" className="bg-primary text-white px-6 py-2.5 rounded font-bold shadow-sm hover:bg-blue-600 transition flex items-center gap-2">
                <span className="material-icons text-sm">arrow_back</span> Back to shop
              </Link>
              <button className="bg-white border border-border-main text-primary px-6 py-2.5 rounded font-bold shadow-sm hover:bg-gray-50 transition">Remove all</button>
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="w-full lg:w-80 flex-shrink-0 space-y-4">
            <div className="bg-white border border-border-main rounded-md p-4 shadow-sm">
              <p className="text-sm font-medium mb-2 text-text-muted">Have a coupon?</p>
              <div className="flex border rounded overflow-hidden">
                <input type="text" placeholder="Add coupon" className="w-full px-3 py-2 text-sm outline-none border-none" />
                <button className="border-l bg-white px-4 py-2 text-sm font-bold text-primary hover:bg-gray-50 transition">Apply</button>
              </div>
            </div>

            <div className="bg-white border border-border-main rounded-md p-4 shadow-sm space-y-4">
              <div className="space-y-3 pb-4 border-b">
                <div className="flex justify-between text-text-muted"><span>Subtotal:</span> <span>$1403.97</span></div>
                <div className="flex justify-between text-text-muted"><span>Discount:</span> <span className="text-red-500">-$60.00</span></div>
                <div className="flex justify-between text-text-muted"><span>Tax:</span> <span className="text-secondary">+$14.00</span></div>
              </div>
              <div className="flex justify-between items-end font-bold text-lg">
                <span>Total:</span> <span>$1357.97</span>
              </div>
              <button className="w-full bg-secondary text-white font-bold py-3 rounded-lg text-lg shadow-lg shadow-green-500/20 hover:bg-green-600 transition">Checkout</button>
              <div className="flex justify-center gap-2 grayscale opacity-50">
                 <img alt="Visa" className="h-4" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" />
                 <img alt="MasterCard" className="h-4" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" />
                 <img alt="PayPal" className="h-4" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" />
                 <img alt="Amex" className="h-4" src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* Saved for later */}
        <div className="mt-12 bg-white border border-border-main rounded-md p-6">
          <h2 className="text-xl font-bold mb-6">Saved for later</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PRODUCTS.slice(3, 7).map((p) => (
              <div key={p.id} className="flex flex-col">
                <div className="aspect-square bg-gray-50 rounded border flex items-center justify-center p-4 mb-4 hover:shadow-inner transition">
                  <img alt={p.name} className="max-h-full max-w-full object-contain" src={p.image} />
                </div>
                <div className="font-bold text-lg mb-1">${p.price.toFixed(2)}</div>
                <p className="text-sm text-text-muted mb-4 line-clamp-2">{p.name}</p>
                <button className="flex items-center gap-2 text-primary font-bold text-sm border border-border-main rounded px-4 py-2 w-fit hover:bg-gray-50 transition">
                  <span className="material-icons-outlined text-sm">shopping_cart</span> Move to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
