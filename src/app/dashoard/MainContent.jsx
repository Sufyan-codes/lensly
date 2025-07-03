import React from 'react';
import { FaExchangeAlt, FaWallet, FaHistory } from 'react-icons/fa';
import { RiSendPlane2Line } from 'react-icons/ri';

export default function MainContent() {
  return (
    <main className="w-full lg:w-3/4 p-4 sm:p-6">
      {/* Balance */}
      <div className="bg-blue-700 text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <p>Your Balance</p>
          <h2 className="text-3xl font-bold">$90,730.09</h2>
        </div>
        <div className="space-x-2">
          <button className="bg-white text-blue-700 px-4 py-2 rounded text-sm">Send Money</button>
          <button className="bg-white text-blue-700 px-4 py-2 rounded text-sm">Add Money</button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <FaExchangeAlt className="mx-auto text-blue-600 text-xl mb-2" />
          <p className="text-sm">P2P Transfer</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <RiSendPlane2Line className="mx-auto text-blue-600 text-xl mb-2" />
          <p className="text-sm">International Transfer</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <FaWallet className="mx-auto text-blue-600 text-xl mb-2" />
          <p className="text-sm">Setup Wallet</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <FaHistory className="mx-auto text-blue-600 text-xl mb-2" />
          <p className="text-sm">Transaction History</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded shadow mb-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <ul>
          <li className="flex justify-between items-center py-2 border-b min-w-[300px]">
            <div>
              <p className="font-medium">To: Robinson Honour</p>
              <p className="text-sm text-gray-500">23/04/2025 · <span className="bg-yellow-100 text-yellow-800 px-2 rounded text-xs">pending</span></p>
            </div>
            <p className="text-red-600 font-semibold">-USD 50.00</p>
          </li>
          <li className="flex justify-between items-center py-2 min-w-[300px]">
            <div>
              <p className="font-medium">To: Robinson Honour</p>
              <p className="text-sm text-gray-500">22/04/2025 · <span className="bg-yellow-100 text-yellow-800 px-2 rounded text-xs">pending</span></p>
            </div>
            <p className="text-red-600 font-semibold">-USD 44.00</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
