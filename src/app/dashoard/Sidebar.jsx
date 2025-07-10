import React from "react";
import { FaSignOutAlt,FaExchangeAlt } from "react-icons/fa";
import { RiHome7Line, RiUser3Line } from "react-icons/ri";
import {
  RiSendPlaneLine,
  RiSearchLine,
  RiBankCardLine,
  RiUser3Fill,
  RiNotification2Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-blue-800 text-white p-5 flex flex-col justify-between transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0 lg:flex lg:w-1/5`}
    >
      <div>
        <div className="hidden lg:block mb-10 tracking-tighter">
          <Link to='/' className="text-2xl font-bold ">FinTech</Link>
        </div>
        <nav className="space-y-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-3 rounded bg-white text-blue-800 active:bg-blue-700"
              >
                <div className="flex gap-2 items-center">
                  <RiHome7Line /> <p>Dashboard</p>
                </div>
              </Link>
            </li>
            <li>
              <div className="flex items-center hover:bg-white hover:text-blue-700 px-2 rounded">
                <FaExchangeAlt />

                <Link
                  to="#"
                  className="block py-2 px-3 rounded "
                >
                  Transactions
                </Link>
              </div>
            </li>
            <li>
              <li className="text-sm flex items-center gap-2">
                {" "}
                <RiSendPlaneLine /> <p>Send Money</p>
              </li>
              <ul className="ml-10 space-y-4 mt-2">
                <li>
                  {" "}
                  <Link
                    href="#"
                    className="block py-2 px-3 rounded hover:bg-white hover:text-blue-800 active:bg-blue-700"
                  >
                    P2P Transfer
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3 rounded hover:bg-white hover:text-blue-800 active:bg-blue-700"
                  >
                    International Transfer
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <div className="flex items-center rounded hover:bg-white hover:text-blue-800 active:bg-blue-700 px-2">
                <FaExchangeAlt />
                <a
                  href="#"
                  className="block py-2 px-3 "
                >
                  Converter
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded hover:bg-white hover:text-blue-800 active:bg-blue-700 px-2 rounded">
                <RiSearchLine />
                <Link
                  to="#"
                  className="block py-2 px-3 "
                >
                  Track Payment
                </Link>
              </div>
            </li>
            <li>
              {" "}
              <div className="flex items-center rounded hover:bg-white hover:text-blue-800 active:bg-blue-700 px-2 rounded">
                <RiBankCardLine />
                <Link
                  to="#"
                  className="block py-2 px-3 "
                >
                  Payment Methods
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded hover:bg-white hover:text-blue-800 active:bg-blue-700 px-2 rounded">
                <RiUser3Line />
                <Link
                  to="#"
                  className="block py-2 px-3 "
                >
                  Profile
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded hover:bg-white hover:text-blue-800 active:bg-blue-700 px-2 rounded">
                <RiNotification2Line />
                <Link
                  to="#"
                  className="block py-2 px-3 "
                >
                  Notifications
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center rounded hover:bg-white hover:text-blue-800 active:bg-blue-700 px-2 rounded">
                <Link
                  to="#"
                  className="block py-2 px-3 "
                >
                  Help & Support
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <a
        href="#"
        className="flex items-center text-sm text-white hover:text-gray-300 mt-6 lg:mt-0"
      >
        <FaSignOutAlt className="mr-2" /> Sign Out
      </a>
    </aside>
  );
}
