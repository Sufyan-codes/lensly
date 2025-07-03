import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`fixed inset-y-0 left-0 w-64 bg-blue-800 text-white p-5 flex flex-col justify-between transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:flex lg:w-1/5`}>
      <div>
        <div className="hidden lg:block">
          <h1 className="text-2xl font-bold mb-10">FinTech</h1>
        </div>
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-3 rounded bg-blue-600">Dashboard</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Transactions</a>
          <div>
            <p className="text-sm font-semibold">Send Money</p>
            <div className="ml-4 space-y-2">
              <a href="#" className="block hover:underline">P2P Transfer</a>
              <a href="#" className="block hover:underline">International Transfer</a>
            </div>
          </div>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Converter</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Track Payment</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Payment Methods</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Profile</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Notifications</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Help & Support</a>
        </nav>
      </div>
      <a href="#" className="flex items-center text-sm text-white hover:text-gray-300 mt-6 lg:mt-0">
        <FaSignOutAlt className="mr-2" /> Sign Out
      </a>
    </aside>
  );
}
