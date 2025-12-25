
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Orders: React.FC = () => {
  const pastOrders = [
    { id: 'ORD-98212', date: '24 Oct 2023', total: 42.50, status: 'Delivered', items: [PRODUCTS[2]], tracking: 'DH987654321' },
    { id: 'ORD-98211', date: '18 Oct 2023', total: 199.50, status: 'Shipped', items: [PRODUCTS[5]], tracking: 'DH987654320' },
    { id: 'ORD-98210', date: '12 Oct 2023', total: 25.60, status: 'Processing', items: [PRODUCTS[0], PRODUCTS[1]], tracking: null },
  ];

  return (
    <div className="bg-bg-main min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Order History</h1>
        
        <div className="space-y-6">
          {pastOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg border border-border-main shadow-sm overflow-hidden">
              <div className="p-4 md:p-6 bg-gray-50 border-b flex flex-wrap justify-between items-center gap-4">
                <div className="flex gap-8 flex-wrap">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-muted">Order Placed</p>
                    <p className="text-sm font-medium">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-muted">Total Amount</p>
                    <p className="text-sm font-bold text-primary">${order.total.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-muted">Order ID</p>
                    <p className="text-sm font-medium">#{order.id}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-text-muted">Status</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-white border border-border-main px-4 py-2 rounded text-sm font-bold hover:bg-gray-50 transition">Order Details</button>
                  <button className="bg-primary text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-600 transition">Buy Again</button>
                </div>
              </div>
              
              <div className="p-4 md:p-6 divide-y">
                {order.items.map((item, idx) => (
                  <div key={idx} className="py-4 flex flex-col md:flex-row gap-4 first:pt-0 last:pb-0">
                    <div className="w-20 h-20 bg-gray-50 rounded border flex items-center justify-center p-2 flex-shrink-0">
                      <img alt={item.name} className="max-h-full max-w-full object-contain" src={item.image} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`} className="font-bold text-text-main hover:text-primary transition line-clamp-1">{item.name}</Link>
                      <p className="text-xs text-text-muted mt-1">{item.category} • Return window closed on Nov 24</p>
                      <div className="mt-4 flex gap-4">
                        <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
                          <span className="material-icons-outlined text-sm">star_outline</span> Write a review
                        </button>
                        <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
                          <span className="material-icons-outlined text-sm">support_agent</span> Contact Seller
                        </button>
                      </div>
                    </div>
                    {order.tracking && (
                      <div className="md:w-48 text-right hidden md:block">
                        <p className="text-[10px] uppercase font-bold text-text-muted mb-1">Tracking Number</p>
                        <p className="text-sm font-medium font-mono text-secondary">{order.tracking}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
