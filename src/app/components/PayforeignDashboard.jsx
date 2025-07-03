import React, { useState } from 'react';
import Sidebar from '../dashoard/Sidebar';
import MainContent from '../dashoard/MainContent';
import ExchangeRates from '../dashoard/ExchangeRates';
import { FaBars } from 'react-icons/fa';

/**
 * PayforeignDashboard.jsx
 * Root page that stitches together Sidebar, MainContent, and ExchangeRates.
 * Handles the mobile drawer toggle and overall responsive 3‑column layout.
 */
export default function PayforeignDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <header className="flex justify-between items-center bg-blue-800 text-white p-4 lg:hidden">
        <h1 className="text-xl font-bold">FinTech</h1>
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          aria-label="Toggle sidebar"
        >
          <FaBars className="text-2xl" />
        </button>
      </header>

      {/* Sidebar Drawer */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Backdrop for mobile drawer */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Main (middle + right) columns */}
      <div className="flex-1 lg:flex lg:w-4/5">
        <MainContent />
        <ExchangeRates />
      </div>
    </div>
  );
}
