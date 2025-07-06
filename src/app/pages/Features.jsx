import React from "react";
import hero from "../../../public/images/undraw_connected-world_anke.svg";
import { RiNotification4Line } from "@remixicon/react";
import { RiCheckFill, RiShieldLine } from "react-icons/ri";

export default function Features() {
  return (
    <section className="max-w-7xl pt-28 p-4 pb-28 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-28 gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-blue-200 w-10 h-10 rounded-md"><RiNotification4Line className="w-6  h-6 mx-auto text-blue-600 mt-2"/></div>
          <h1 className="text-xl lg:text-3xl font-semibold text-blue-800">Real Time Notifications</h1>
          <p className="text-gray-800 lg:text-xl">
            Your customer stay informed in real time with everything thats
            happening on his account: payments, transfer, advice, advice. Get
            visible on your customers flows to anticipate their needs.
          </p>
          <ul className="text-gray-800 lg:text-xl flex flex-col gap-3">
            <li><div className=" flex gap-2 items-center "><RiCheckFill /> <p>Cards that work all across the world</p></div> </li>
            <li><div className=" flex gap-2 items-center "><RiCheckFill /> <p> No ATM fees. No minimum balance. No overdraft</p></div></li>
          </ul>
        </div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
}
