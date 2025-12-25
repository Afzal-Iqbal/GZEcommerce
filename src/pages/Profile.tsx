
import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className="bg-bg-main min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Side Menu */}
          <aside className="lg:col-span-3 space-y-2">
            <div className="bg-white rounded-lg border border-border-main p-6 mb-4 shadow-sm text-center">
              <div className="w-24 h-24 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border-4 border-white shadow-md">
                JD
              </div>
              <h3 className="font-bold text-lg">John Doe</h3>
              <p className="text-sm text-text-muted mb-4">Silver Member</p>
              <button className="w-full bg-primary text-white py-2 rounded-md font-medium text-sm hover:bg-blue-600 transition">Edit profile</button>
            </div>
            
            <nav className="bg-white rounded-lg border border-border-main overflow-hidden shadow-sm">
              {[
                { name: 'My Dashboard', icon: 'dashboard', active: true },
                { name: 'My Orders', icon: 'favorite', link: '/orders' },
                { name: 'Messages', icon: 'message', link: '/messages' },
                { name: 'My Address', icon: 'location_on' },
                { name: 'Security', icon: 'lock' },
                { name: 'Settings', icon: 'settings' },
                { name: 'Log Out', icon: 'logout', color: 'text-red-500' }
              ].map((item, i) => (
                <Link 
                  key={i} 
                  to={item.link || '#'} 
                  className={`flex items-center gap-3 p-4 hover:bg-gray-50 transition border-b last:border-b-0 ${item.active ? 'bg-blue-50 text-primary border-l-4 border-l-primary' : 'text-text-main'}`}
                >
                  <span className={`material-icons-outlined text-xl ${item.color || 'text-gray-400'}`}>{item.icon}</span>
                  <span className={`text-sm font-medium ${item.color || ''}`}>{item.name}</span>
                </Link>
              ))}
            </nav>
          </aside>

          {/* Profile Dashboard */}
          <div className="lg:col-span-9 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Total Orders', value: '42', icon: 'shopping_bag', color: 'bg-orange-100 text-orange-600' },
                { label: 'Unread Messages', value: '03', icon: 'mail', color: 'bg-blue-100 text-blue-600' },
                { label: 'Wallet Balance', value: '$2,450', icon: 'account_balance_wallet', color: 'bg-green-100 text-green-600' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-border-main shadow-sm flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color}`}>
                    <span className="material-icons-outlined">{stat.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">{stat.value}</h4>
                    <p className="text-xs text-text-muted uppercase tracking-wider font-bold">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg border border-border-main shadow-sm overflow-hidden">
              <div className="p-6 border-b flex justify-between items-center">
                <h3 className="font-bold text-lg">Personal Information</h3>
                <button className="text-primary text-sm font-bold hover:underline">Change Password</button>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase mb-2">First Name</label>
                  <p className="border-b pb-2">John</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase mb-2">Last Name</label>
                  <p className="border-b pb-2">Doe</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase mb-2">Email</label>
                  <p className="border-b pb-2">john.doe@example.com</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-muted uppercase mb-2">Phone</label>
                  <p className="border-b pb-2">+49 123 456 789</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-border-main shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                  <span className="material-icons-outlined">location_on</span> Default Shipping Address
                </h3>
              </div>
              <div className="p-6">
                <p className="font-bold mb-1">Office Address</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Berlin Innovation Hub<br/>
                  Alexanderplatz 1, Suite 402<br/>
                  10178 Berlin, Germany
                </p>
                <button className="mt-4 text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                  <span className="material-icons-outlined text-sm">edit</span> Change Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
