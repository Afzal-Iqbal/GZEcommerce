
import React, { useState } from 'react';

const Messaging: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const chats = [
    { name: 'Guanjoi Trading LLC', lastMsg: 'Your order has been shipped...', time: '10:45 AM', avatar: 'G', online: true },
    { name: 'Apple Authorized Seller', lastMsg: 'The discount is available until...', time: 'Yesterday', avatar: 'A', online: false },
    { name: 'Tech Master Solution', lastMsg: 'Can you confirm the address?', time: 'Oct 24', avatar: 'T', online: true },
    { name: 'Fashion Hub UAE', lastMsg: 'We have new summer collection', time: 'Oct 20', avatar: 'F', online: false },
  ];

  return (
    <div className="bg-bg-main min-h-[calc(100vh-160px)] py-8">
      <div className="container mx-auto px-4 h-full">
        <div className="bg-white border border-border-main rounded-xl shadow-lg flex overflow-hidden min-h-[600px]">
          {/* Chat List Sidebar */}
          <aside className="w-full md:w-80 border-r border-border-main flex flex-col">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold mb-4">Messages</h2>
              <div className="relative">
                <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
                <input 
                  type="text" 
                  placeholder="Search contacts" 
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {chats.map((chat, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedChat(i)}
                  className={`p-4 border-b last:border-b-0 cursor-pointer flex gap-3 transition ${selectedChat === i ? 'bg-blue-50 border-l-4 border-l-primary' : 'hover:bg-gray-50'}`}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center font-bold">
                      {chat.avatar}
                    </div>
                    {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary border-2 border-white rounded-full"></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-sm truncate">{chat.name}</h4>
                      <span className="text-[10px] text-text-muted">{chat.time}</span>
                    </div>
                    <p className="text-xs text-text-muted truncate">{chat.lastMsg}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Chat Area */}
          <main className="hidden md:flex flex-1 flex-col bg-gray-50">
            {/* Chat Header */}
            <div className="p-4 bg-white border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center font-bold">
                  {chats[selectedChat].avatar}
                </div>
                <div>
                  <h3 className="font-bold">{chats[selectedChat].name}</h3>
                  <p className="text-xs text-secondary font-medium">{chats[selectedChat].online ? 'Online' : 'Away'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <button className="hover:text-primary transition"><span className="material-icons-outlined">videocam</span></button>
                <button className="hover:text-primary transition"><span className="material-icons-outlined">call</span></button>
                <button className="hover:text-primary transition"><span className="material-icons-outlined">more_vert</span></button>
              </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              <div className="flex justify-center">
                <span className="bg-gray-200 text-gray-500 text-[10px] uppercase font-bold px-3 py-1 rounded-full">Today</span>
              </div>
              
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-xs font-bold text-primary">{chats[selectedChat].avatar}</div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border">
                  Hello! How can I help you today regarding your recent order #8786867?
                  <span className="block text-[10px] text-text-muted mt-1 text-right">10:45 AM</span>
                </div>
              </div>

              <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">ME</div>
                <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm">
                  Hi, I wanted to check the estimated delivery date for Berlin.
                  <span className="block text-[10px] text-blue-100 mt-1 text-right">10:46 AM</span>
                </div>
              </div>

              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-xs font-bold text-primary">{chats[selectedChat].avatar}</div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border">
                  It's currently in transit and should arrive by Wednesday morning.
                  <span className="block text-[10px] text-text-muted mt-1 text-right">10:47 AM</span>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t">
              <div className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-2 border">
                <button className="text-gray-400 hover:text-primary"><span className="material-icons-outlined">add_circle_outline</span></button>
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 bg-transparent border-none outline-none text-sm py-2" 
                />
                <button className="text-gray-400 hover:text-primary"><span className="material-icons-outlined">sentiment_satisfied_alt</span></button>
                <button className="bg-primary text-white p-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center">
                  <span className="material-icons text-sm">send</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
