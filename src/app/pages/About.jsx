import React from 'react'
import { Link } from 'react-router-dom';
import hero from "../../../public/images/Online Banking.svg";

export default function About() {
  return (
    <section className='max-w-6xl mx-auto'>
       <div className=" px-4 md:flex justify-between pt-4 text-black">
        <div className="flex flex-col gap-4 mt-28">
          <span className="text-blue-700 bg-blue-200 py-2 px-4 w-[250px] text-1xl  rounded-full text-center">
            About Us
          </span>

          <h1 className="text-gray-900 font-bold lg:text-4xl text-4xl">
            A modern, technology-first <br />
            bank built for you
          </h1>

          <p className=" text-neutral-500">
            At Fintech, our mission is to make international money transfer simple
            ,<br /> transparent, and secure for everyone. We believe that sending money <br />
            across borders should be as easy as sending a text message.
          </p>

          <p className=" text-neutral-500">
            We`re committed to providing the best rates, fastest delivery times, and
            ,<br /> most reliable service  in the industry, ensuring that your money reaches its <br />
            destination safely on time.
          </p>


          
        </div>
        <div>
          <img src={hero} width={550} alt="hero image" />
        </div>
      </div>
    </section>
  )
}
