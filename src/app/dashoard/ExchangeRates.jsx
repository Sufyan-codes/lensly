import React from "react";

export default function ExchangeRates() {
  return (
    <aside className="w-full lg:w-1/3 p-4 lg:pr-6 tracking-tighter">
      {/* Exchange Rate Table */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <div className="flex justify-between">
          <h3 className="text-sm text-gray-900 font-semibold mb-4">
            Exchange Rates
          </h3>
          <p>Updated just now</p>
        </div>
        <ul className="space-y-3">
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
            <div className="  flex flex-col">
              <p className="font-semibold text-gray-800"> USD/CNY</p>{" "}
              <p className="text-xsm">Chinese Yuan</p>
            </div>
            <div className="text-sm flex flex-col">
              <p className="font-semibold text-gray-800">7.29 CNY</p>{" "}
              <p className="text-red-500 text-xs">▼ 0.06%</p>
            </div>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
            <div className="text-sm flex flex-col">
              <p className="font-semibold text-gray-800">USD/ZAR</p>{" "}
              <p className="">South African Rand</p>
            </div>
            <div className="text-sm flex flex-col">
              <p className="font-semibold text-gray-800">18.62 ZAR</p>{" "}
              <p className="text-red-500 text-xs">▼ 0.18%</p>
            </div>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
            <div className="text-sm flex flex-col">
              {" "}
              <p className="font-semibold text-gray-800">USD/CAD</p>{" "}
              <p className=""> Canadian Dollar</p>
            </div>
            <div className="text-sm">
              <p>1.39 CAD</p> <p className="text-red-400 text-xs">0.00%</p>
            </div>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
            <div className="text-sm  flex flex-col">
              <p className="font-semibold text-gray-800">USD/AUD</p>{" "}
              <p>Australian Dollar</p>
            </div>
            <div className="text-sm font-semibold text-gray-800">
             <p>1.57 AUD </p> <p className="text-red-500 text-xs">▼ 0.01%</p>
            </div>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
            <div className="text-sm flex flex-col">
              <p className="font-semibold text-gray-800">USD/INR</p>{" "}
              <p>Indian Rupee</p>
            </div>
            <div className="text-sm flex flex-col">
              <p className="font-semibold text-gray-800">85.50 INR</p>{" "}
              <p className="text-red-500 text-xs">▼ 0.84%</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Support Box */}
      <div className="bg-blue-700 p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 text-left">Need Help?</h3>
        <p className="text-sm mb-4">
          Our support team is available 24/7 to assist you with any questions.
        </p>
        <button className="bg-white text-blue-900 px-4 py-2 rounded text-sm font-semibold w-full">
          Contact Support
        </button>
      </div>
    </aside>
  );
}
