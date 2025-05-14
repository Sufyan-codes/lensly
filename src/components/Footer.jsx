import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 pb-20 mt-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 py-28 gap-4 text-sm">
        <div className="flex flex-col gap-10">
          <h1 className="text-xl lg:text-4xl">
            Sign up for our newsletter <br /> today.
          </h1>
          <p className="border-b-2 border-red-500 w-20 mb-2">SUBSCRIPTION</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 text-sm">
          <div>
            <h2 className="text-xl lg:text-xl">.(SOCIALS).</h2>

            <div className="mt-10 flex flex-col gap-4">
              <p>instagram</p>
              <p>linkedin</p>
              <p>facebook</p>
              <p>youtube</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl lg:text-xl">.(LOCATION).</h2>

            <div className="mt-10 flex flex-col gap-4">
              <p>dubai</p>
              <p>ney york</p>
              <p>tokyo</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl lg:text-xl">.(PHONE).</h2>

            <div className="mt-10">
              <p>+1234567899</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl m-auto">
        <p className="lg:text-2xl">We would love to here from you</p>
        <h1 className="lg:text-6xl underline mt-4">hello@creative.com</h1>
      </div>
    </footer>
  );
}
