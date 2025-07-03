import React from 'react';

export default function ExchangeRates() {
  return (
    <aside className="w-full lg:w-1/4 p-4 lg:pr-6">
      {/* Exchange Rate Table */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Exchange Rates</h3>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <p className="text-sm">USD/CNY (Chinese Yuan)</p>
            <p className="text-sm">
              7.29 CNY <span className="text-red-500 text-xs">▼ 0.06%</span>
            </p>
          </li>
          <li className="flex justify-between items-center">
            <p className="text-sm">USD/ZAR (South African Rand)</p>
            <p className="text-sm">
              18.62 ZAR <span className="text-red-500 text-xs">▼ 0.18%</span>
            </p>
          </li>
          <li className="flex justify-between items-center">
            <p className="text-sm">USD/CAD (Canadian Dollar)</p>
            <p className="text-sm">
              1.39 CAD <span className="text-gray-400 text-xs">0.00%</span>
            </p>
          </li>
          <li className="flex justify-between items-center">
            <p className="text-sm">USD/AUD (Australian Dollar)</p>
            <p className="text-sm">
              1.57 AUD <span className="text-red-500 text-xs">▼ 0.01%</span>
            </p>
          </li>
          <li className="flex justify-between items-center">
            <p className="text-sm">USD/INR (Indian Rupee)</p>
            <p className="text-sm">
              85.50 INR <span className="text-red-500 text-xs">▼ 0.84%</span>
            </p>
          </li>
        </ul>
      </div>

      {/* Support Box */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
        <p className="text-sm mb-4">
          Our support team is available 24/7 to assist you with any questions.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm w-full">
          Contact Support
        </button>
      </div>
    </aside>
  );
}
