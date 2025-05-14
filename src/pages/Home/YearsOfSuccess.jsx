import React from 'react';
import img4 from "../../../public/assets/oleksandr-brovko-kgPd7CMis_E-unsplash.jpg";
import img5 from "../../../public/assets/skyler-ewing-EFSNRCayX8w-unsplash.jpg";
import img6 from "../../../public/assets/erik-mclean-h160c_nYiyw-unsplash.jpg";
import img7 from "../../../public/assets/light house.png";

export default function YearsOfSuccess() {
  return (
    <section className="mt-28 mx-auto lg:h-screen h-72 px-4">
      <h2 className="text-neutral-800 kanit-light text-center font-bold lg:text-2xl text-xl">
        35 YEARS OF SUCCESS: CREATIVITY MEETS PHOTOGRAPHY
      </h2>

      <div className="relative w-full h-full flex items-center justify-center  bg-white overflow-hidden">

        {/* Centered Large Number */}
        <h1 className="text-[13rem] z-[100] number lg:mt-[-12rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-extrabold text-neutral-800 lg:z-10 text-center">
          35
              </h1>
       
        {/* Left Images with responsive gaps */}
        <img
          src={img4}
          alt="Bird"
          loading="lazy"
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-[250px] lg:h-40 object-cover  shadow-md -translate-y-1/2 top-1/2 left-[2%]"
        />
        <img
          src={img5}
          alt="Tree"
          loading="lazy"
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-[250px]  lg:h-40 object-cover  shadow-md -translate-y-1/2 top-1/2 left-[23%]"
        />

        {/* Right Image */}
        <img
          src={img7}
          alt="Bridge"
          loading="lazy"
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-[250px] lg:h-40 object-cover  shadow-md -translate-y-1/2 top-1/2 right-[2%]"
        />

        {/* Rotated center overlay image */}
        <img
          src={img6}
          alt="House"
          loading="lazy"
          className="absolute object-cover shadow-xl lg:mt-12 lg:ml-40 transform rotate-6 z-20  sm:z-10 w-40 h-28 sm:w-52 sm:h-36 md:w-80 md:h-52 lg:w-[360px] lg:h-64"
          style={{
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-6deg)",
          }}
        />
      </div>
    </section>
  );
}
