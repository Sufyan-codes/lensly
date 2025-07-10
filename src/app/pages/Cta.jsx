import React from "react";
import { Link } from "react-router-dom";
import cta from "../../../public/images/Credit Card 1.svg";

export default function Cta() {
  return (
    <section className="h-full bg-blue-500">
      <div className="max-w-7xl mx-auto items-center py-4 grid tracking-tighter lg:grid-cols-2 grid-cols-1 p-4 ">
        <div>
        <h1 className="text-xl lg:text-5xl text-white font-semibold mt-20">
          join the 2+ Million customers
          using FinTech
        </h1>
        <div className="flex gap-4 mt-20">
          <Link
            to="/signup"
            className="bg-blue-600 text-white
                    py-2 px-10 rounded-md hover:bg-blue-500 transition"
          >
            Open Account
          </Link>
          <Link
            to="/login"
            className=" text-white-900
                    py-2 px-10 rounded-md border border-white hover:text-neutral-700 transition"
          >
            Login
          </Link>
          </div>
          
        </div>
        <div>
          <img src={cta} alt="" className="" />
          </div>
      </div>
    </section>
  );
}
