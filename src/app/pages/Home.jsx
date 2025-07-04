import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../public/images/Credit Card 1.svg";


export default function Home() {
  return (
    <section className="pt-28 max-w-6xl mx-auto">
      <div className=" px-4 md:flex justify-between mt-4 text-black">
        <div className="flex flex-col gap-4 mt-20">
          <span className="text-blue-700 bg-blue-200 py-2 px-4 w-[250px] text-1xl  rounded-full text-center">
            Simple. Transparent. Secure
          </span>

          <h1 className="text-blue-700 font-bold lg:text-7xl text-4xl">
            International <br />
            Money Transfer
          </h1>

          <p className="lg:text-xl text-neutral-500">
            Enjoy easy,fast and reliable international money transfer from
            <br /> South Africa with Fintech
          </p>

          <div className="flex gap-4">
            <Link
              to="/signup"
              className="bg-blue-600 text-white
                    py-2 px-10 rounded-md hover:bg-blue-500 transition"
            >
              Open Account
            </Link>
            <Link
              to="/login"
              className=" text-blue-900
                    py-2 px-10 rounded-md border border-blue-600 hover:text-neutral-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
        <div>
          <img src={hero} width={550} alt="hero image" />
        </div>
      </div>
      <div>

        {/* Features */}

        <div className="px-4">

          <h3 className="text-neutral-500 text-xl">Our Features</h3>

          <div className="md:flex gap-10 mt-4">
            <div className="flex gap-4">
              <div className="bg-blue-200 w-10 h-10 rounded-md">img</div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-xl font-semibold text-neutral-600">
                  Global Transfer
                </p>
                <span className="">Send money Worldwide</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-200 w-10 h-10 rounded-md">img</div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-xl font-semibold text-neutral-600">
                  Secure Banking
                </p>
                <span className="">Protected Transaction</span>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col gap-4 bg-gray-100 p-5 rounded-lg">
              <div className="bg-blue-200 w-10 h-10 rounded-md">img</div>
              <h1 className="text-xl lg:text-2xl font-semibold text-neutral-700">Smart Banking</h1>
              <p className="text-neutral-800">Real-time notifications keep you informed <br />
                with everything thats happening in your <br /> account.
              </p>
            </div>
            <div className="flex flex-col gap-4 bg-gray-100 p-5 rounded-lg">
              <div className="bg-blue-200 w-10 h-10 rounded-md">img</div>
              <h1 className="text-xl lg:text-2xl font-semibold text-neutral-700">Safe Investment</h1>
              <p className="text-neutral-800 ">The better way to save and invest with <br />
                highest returns on your investments. 
              </p>
            </div>
            <div className="flex flex-col gap-4 bg-gray-100 p-5 rounded-lg">
              <div className="bg-blue-200 w-10 h-10 rounded-md">img</div>
              <h1 className="text-xl lg:text-2xl font-semibold text-neutral-700">Global Access</h1>
              <p className="text-neutral-800 ">Cards that work all across the world with no <br />
                ATM fees or minimum balance <br /> requirements.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
