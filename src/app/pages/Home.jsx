import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../public/images/hero.webp";
import { RiCheckFill, RiShieldLine } from "react-icons/ri";
import { RiArrowRightLine } from "@remixicon/react";

export default function Home() {
  return (
    <section className="bg-[#F8FAFF]">
      <main className="pt-28 max-w-7xl mx-auto pb-10">
        <div className=" px-4 flex flex-col  mt-4 text-black">
          <div className="mx-auto px-4 flex flex-col items-center
      text-center gap-4 mt-20">
            <div className="text-blue-700 bg-blue-200 mb-8 border-neutral-800 px-3 py-2 rounded-full
        text-xs flex items-center">
              <RiCheckFill /> <p>Simple. Transparent. Secure</p>
            </div>

            <h1 className="text-blue-700 text-5xl lg:text-8xl my-4 font-semibold tracking-lighter">
              International
              Money Transfer
            </h1>

            <p className=" text-neutral-400">
              Enjoy easy,fast and reliable international money transfer from
              <br /> South Africa with Fintech
            </p>

            <div className="flex gap-4">
              <Link
                to="/signup"
                className="inline-block bg-blue-600 hover:bg-blue-500
                text-white py-3 px-6 rounded-lg font-medium"
              >
                Open Account
              </Link>
              <Link
                to="/login"
                className=" inline-block border border-blue-900 hover:bg-blue-500 hover:text-blue hover:border-blue-900
                text-neutral-700 py-3 px-6 rounded-lg font-medium"
              >
                Login
              </Link>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center">
            <img src={hero} width={550} alt="hero image" />
          </div>
        <div>
          {/* Features */}

          <div className="px-4 mt-24">
            <h3 className="text-3xl lg:text-5xl mt-20 tracking-tighter text-neutral-500">Our Features</h3>


            <div className=" grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex flex-col gap-4 bg-white shadow p-5 rounded-lg">
                <div className="bg-blue-200 w-10 h-10 rounded-md">img</div>
                <h1 className="text-xl lg:text-2xl font-semibold text-neutral-700">
                  Smart Banking
                </h1>
                <p className="text-neutral-500">
                  Real-time notifications keep you informed <br />
                  with everything thats happening in your <br /> account.
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-white shadow p-5 rounded-lg">
                <div className="bg-blue-200 w-10 h-10 rounded-md">
                  <RiShieldLine className="w-6  h-6 mx-auto text-blue-600 mt-2" />
                </div>
                <h1 className="text-xl lg:text-2xl font-semibold text-neutral-700">
                  Safe Investment
                </h1>
                <p className="text-neutral-500 ">
                  The better way to save and invest with <br />
                  highest returns on your investments.
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-white shadow p-5 rounded-lg">
                <div className="bg-blue-200 w-10 h-10 rounded-md">
                  <RiArrowRightLine className="w-6  h-6 mx-auto text-blue-600 mt-2" />
                </div>
                <h1 className="text-xl lg:text-2xl font-semibold text-neutral-700">
                  Global Access
                </h1>
                <p className="text-neutral-500 ">
                  Cards that work all across the world with no <br />
                  ATM fees or minimum balance <br /> requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
