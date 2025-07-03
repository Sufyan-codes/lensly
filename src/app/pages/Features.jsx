import React from "react";
import hero from "../../../public/images/undraw_connected-world_anke.svg";

export default function Features() {
  return (
    <section className="max-w-6xl pt-28 pb-28 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-28 gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-blue-200 w-10 h-10 rounded-md">img</div>
          <h1 className="text-xl lg:text-3xl font-semibold text-blue-800">Real Time Notifications</h1>
          <p className="text-gray-800 lg:text-xl">
            Your customer stay informed in real time with everything thats
            happening on his account: payments, transfer, advice, advice. Get
            visible on your customers flows to anticipate their needs.
          </p>
          <ul className="text-gray-800 lg:text-xl flex flex-col gap-3">
            <li><span className="bg-blue-200 w-10 h-10 rounded-md">img</span> Cards that work all across the world</li>
            <li><span className="bg-blue-200 w-10 h-10 rounded-md">img</span> No ATM fees. No minimum balance. No overdraft</li>
          </ul>
        </div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
}
