import React from "react";
import hero from "../../../public/images/undraw_connected-world_anke.svg";

export default function Investment() {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-blue-800 text-xl">Safe Investments</span>
          <h1 className="text-xl lg:text-3xl text-gray-800 font-semibold">
            The Better way To Save & Invest
          </h1>
          <p className="lg:text-xl text-gray-800">
            FinTech helps over million customers achieve their financial goals
            by helping <br /> br them save and invest with ease.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-28 lg:pb-28 gap-4">
                      <div>
                      <img src={hero} alt="image here" />
                      </div>
                      <div className="flex flex-col gap-4">
            <p className="lg:text-xl text-gray-800">
              Put that extracash to use without risk at fintech
            </p>
            <ul className="text-gray-800  flex flex-col gap-3">
              <li className="flex gap-4 p-4 border border-neutral-200 rounded-lg">
                <span className="bg-blue-200 w-10 h-10 rounded-md">img</span>
                <div>
                  <h1 className="font-semibold lg:text-xl">Profit to invest</h1>
                  <p>Easy to manage with our intuitive dashboard and tools</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 border border-neutral-200 rounded-lg">
                <span className="bg-blue-200 w-10 h-10 rounded-md">img</span>
                <div>
                  <h1 className="font-semibold lg:text-xl">High returns</h1>
                  <p>Get the best rates on your investments with fintech</p>
                </div>
              </li>
            </ul>
          </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}
