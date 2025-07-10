import React from "react";
import { FaExchangeAlt, FaWallet, FaHistory } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {  RiAddLargeLine, RiSendPlaneLine , RiArrowRightUpLine, RiArrowRightSLine} from "react-icons/ri";


export default function MainContent() {
  return (
    <main className="w-full lg:w-3/4 p-4 sm:p-6 tracking-tighter">
      {/* Balance */}
      <div className="bg-white pb-4 rounded-lg mb-4 lg:mb-5 shadow">
        <div className="bg-blue-700 text-white h-48 lg:h-9/10 p-6 rounded-t-lg pt-7 lg:pt-14  mb-4 gap-4">
          <div className="flex flex-row justify-between items-start md:items-center mb-4">
            <p>Your Balance</p>
            <div className="px-3 py-1 rounded-full bg-blue-600"><FaRegEyeSlash /></div>
          </div>
          <div className="flex gap-2">
              <h2 className="text-3xl font-bold">$90,730.09</h2>{" "}
              <p className="mt-3">Availabe</p>
            </div>
          
        </div>
        <div className="flex px-4 gap-2">
          <button className="bg-gray-100 text-gray-700 py-4 p-2 w-1/2 rounded-lg text-sm">
            Send Money
          </button>
          <button className="bg-gray-100 text-gray-700 around  py-4 p-2 w-1/2 rounded-lg text-sm">
            <p>Add Money</p>
          </button>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-white flex flex-col  shadow rounded-lg mb-5 pt-4 lg:h-48">
        <h1 className="mx-4 text-xl text-gray-800">Quick Actions</h1>
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 pt-6 p-4">
          <div className="bg-gray-100 p-4 flex flex-col gap-2 rounded shadow text-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full mx-auto">
            <FaExchangeAlt className="mx-auto text-blue-600  text-xl mt-2" />
            </div>
            <p className="text-sm text-gary-900">P2P Transfer</p>
          </div>
          <div className="bg-gray-100 p-4  rounded shadow text-center">
            <div className="w-10 h-10 mx-auto bg-blue-100 rounded-full pt-2">
            <RiSendPlaneLine className="mx-auto text-blue-600 text-xl" />
            </div>
            <p className="text-sm text-gry-800">International Transfer</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow text-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full mx-auto pt-2">
            <RiAddLargeLine className="mx-auto text-blue-600 text-xl " />
            </div>
            <p className="text-sm text-gry-800">Setup Wallet</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow text-center">
            <div className="bg-blue-100 w-10 h-10 mx-auto rounded-full pt-2">
            <FaHistory className="mx-auto text-blue-600 text-xl " />
</div>
            <p className="text-sm text-gry-800">Transaction History</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6  rounded shadow mb-6 overflow-x-auto">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Recent Transactions
          </h3>
          <div className="text-blue-800 flex gap-2 items-center"><p>View All</p> <RiArrowRightSLine /></div>
        </div>
        <ul>
          <li className="flex justify-between items-center py-2 border-b min-w-[300px]">
            <div>
              <div className="font-medium text-sm text-gray-900 flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-red-200">
                  <RiArrowRightUpLine className="mx-auto text-red-600 text-xl mt-1" />
                </div>{" "}
                <p>To: Robinson Honour</p>
              </div>
              <p className="text-sm text-gray-500">
                23/04/2025 ·{" "}
                <span className="bg-yellow-100 text-yellow-800 px-2 rounded text-xs">
                  pending
                </span>
              </p>
            </div>
            <p className="text-red-600 font-semibold">-USD 50.00</p>
          </li>
          <li className="flex justify-between items-center py-2 min-w-[300px]">
          <div>
              <div className="font-medium text-sm text-gray-900 flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-red-200">
                  <RiArrowRightUpLine className="mx-auto text-red-600 text-xl mt-1" />
                </div>{" "}
                <p>To: Robinson Honour</p>
              </div>
              <p className="text-sm text-gray-500">
                23/04/2025 ·{" "}
                <span className="bg-yellow-100 text-yellow-800 px-2 rounded text-xs">
                  pending
                </span>
              </p>
            </div>
            <p className="text-red-600 font-semibold">-USD 44.00</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
