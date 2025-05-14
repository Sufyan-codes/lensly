import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../public/assets/paulius-dragunas-Nhs0sLAn1Is-unsplash.jpg"
import img2 from "../../../public/assets/lia-maaskant-RV8SNyLhQ6Q-unsplash.jpg"
import img3 from "../../../public/assets/erik-mclean-h160c_nYiyw-unsplash.jpg"
import img4 from "../../../public/assets/robin-schreiner-7y4858E8PfA-unsplash.jpg"

const GallerySection = () => {
  return (
    <section className="px-4 md:px-16 py-12 bg-white text-black font-sans">
      {/* Heading */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-4xl kanit-regular md:text-5xl font-bold leading-tight">
          Capture Moments,<br />
          Preserve Memories<span className="text-red-600">.</span>
        </h1>
      </div>

      {/* Gallery */}
      <div className="flex flex-col lg:flex-row gap-2">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={img3}
            alt="Main"
            loading="lazy"
            className="w-[785px]  object-cover rounded-md shadow-sm"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          {/* Full Gallery Heading */}
          <div>
            <Link to='/gallery' className="text-sm font-semibold uppercase tracking-wider mb-2">
              Full Gallery
            </Link>
            <div className="w-10 h-1 bg-red-600"></div>
          </div>

          {/* Two Smaller Images */}
          <div className="flex flex-col gap-4">
            <img
              src={img1}
              alt="Gallery 1"
              loading="lazy"
              className="w-full object-cover rounded-md shadow-sm"
            />
            <img
              src={img2}
              alt="Gallery 2"
              loading="lazy"
              className="w-full object-cover rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
