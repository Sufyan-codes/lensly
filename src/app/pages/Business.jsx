import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../public/images/1.webp";
import {
  RiCheckFill,
  RiSmartphoneLine,
  RiBankCardLine,
  RiBriefcase5Line,
} from "react-icons/ri";
import { RiArrowRightLine } from "@remixicon/react";

export default function Business() {
  return (
    <section className="bg-[#F8FAFF]">
      <main className=" max-w-7xl p-4 mx-auto tracking-tighter">
        <div className="items-center mt-10">
          <div className="text-center flex flex-col gap-4">
            <p className="text-xl text-blue-800">Business Banking</p>
            <h1 className="text-xl lg:text-3xl font-semibold text-gray-800">
              Solutions For Every business Needs
            </h1>
            <p className="text-gray-800 ">
              Power up your business with a full-stack online bank account that
              fits your need
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-28">
            <div className="flex flex-col gap-5 bg-white shadow border-t border-t-4 border-blue-500  p-5 rounded-lg">
              <div className="bg-blue-200 w-10 h-10 rounded-md">
                <RiBankCardLine className="w-6  h-6 mx-auto text-blue-600 mt-2" />
              </div>
              <h1 className="text-xl lg:text-2xl font-semibold text-neutral-700">
                Checking Account
              </h1>
              <p className="text-neutral-500">
                Choose from our checking options that <br />
                allow you to earn interest, avoid fees, and <br /> easily manage
                your account.
              </p>
              <Link
                to="/signUp"
                className="text-sm text-gray-500 flex gap-2 items-center"
              >
                <span>Open Account</span>
                <RiArrowRightLine />
              </Link>
            </div>
            <div className="flex flex-col gap-5 bg-white shadow border-t border-t-4 border-blue-500 p-5 rounded-lg">
              <div className="bg-blue-200 w-10 h-10 rounded-md">img</div>
              <h1 className="text-xl lg:text-2xl font-semibold text-neutral-700">
                Savings Account
              </h1>
              <p className="text-neutral-500 ">
                Save for your goals and watch your money <br />
                grow with a CD, a money market account,a <br />
                avings account. Your future starts now.
              </p>
              <Link
                to="/signUp"
                className="text-sm text-white bg-blue-800 w-40 px-4 py-2 rounded-lg flex gap-2 items-center"
              >
                {" "}
                <span>Start Saving</span>
                <RiArrowRightLine />
              </Link>
            </div>
            <div className="flex flex-col gap-5 bg-white shadow border-t border-t-4 border-blue-500 p-5 rounded-lg">
              <div className="bg-blue-200 w-10 h-10 rounded-md">
                <RiBriefcase5Line className="w-6  h-6 mx-auto text-blue-600 mt-2" />
              </div>
              <h1 className="text-xl lg:text-2xl font-semibold text-neutral-700">
                Business Account
              </h1>
              <p className="text-neutral-500 ">
                Take charge of your business banking with a <br />
                business account. Services including <br /> virtual cards, team
                management and more.
              </p>
              <Link
                to="/signUp"
                className="text-sm text-gray-500 flex gap-2 items-center"
              >
                <span>Open Account</span> <RiArrowRightLine />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-28 pb-28 gap-4">
          <div className="flex flex-col gap-4">
            <div className="bg-blue-200 w-10 h-10 rounded-md">
              <RiSmartphoneLine
                RiShieldLine
                className="w-6  h-6 mx-auto text-blue-600 mt-2"
              />
            </div>
            <h1 className="text-xl lg:text-3xl font-semibold text-blue-800">
              Banking At your Tips
            </h1>
            <p className="text-neutral-500 lg:text-xl">
              Your banking experience anytime, anywhere. Get your money moving
              with our siple to use, accessible mobile app. As good as a bank
              branch within your phone.
            </p>
            <ul className="text-neutral-500 lg:text-xl flex flex-col gap-3">
              <li>
                <div className="flex gap-2 items-center">
                  <RiCheckFill />{" "}
                  <p>Bill Payments, Funds Transfer, QR payments.</p>
                </div>{" "}
              </li>
              <li>
                <div className="flex gap-2 items-center">
                  <RiCheckFill /> <p>Credit card payments and order food.</p>
                </div>{" "}
              </li>
            </ul>
          </div>
          <img src={hero} alt="" />
        </div>
      </main>
    </section>
  );
}
