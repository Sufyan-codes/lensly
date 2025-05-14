import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../../public/assets/by-pils-_h21upxRWv4-unsplash.jpg";
import img3 from "../../../public/assets/hert-niks-tyI1b2abVKE-unsplash.jpg";
import gal1 from "../../../public/assets/erik-mclean-h160c_nYiyw-unsplash.jpg";
import img4 from "../../../public/assets/1.jpeg"
import img11 from "../../../public/assets/gourmet-lenz-punldnEiUtc-unsplash.jpg"
import img8 from "../../../public/assets/hert-niks-tyI1b2abVKE-unsplash.jpg"
import img9 from "../../../public/assets/153309-4-821edc1864f62bd20af9c33814176c71-720x540.jpg.webp"
import img10 from "../../../public/assets/nathalie-ehrnleitner-SApQiu5GIdQ-unsplash.jpg"
import img12 from "../../../public/assets/skyler-ewing-EFSNRCayX8w-unsplash.jpg"
 
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { straggerChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-28 lg:pt-36"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-left">
        <motion.h1
          variants={fadeInUp}
          className="text-4xl kanit-extralight lg:text-7xl my-4 font-semibold tracking-lighter
                 text-neutral-800"
        >
          WITH A LENS IN HAND, <br />
          WE BRING YOUR VISIONS TO LIFE.
        </motion.h1>
      </div>
      <motion.div
        variants={fadeInUp}
        className="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-3 gap-2 mt-4"
      ></motion.div>
      <div className="max-w-6xl sm:max-w-6xl px-4 m-auto flex flex-col lg:flex-row gap-2">
        {/* Right Section */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-2 lg:w-1/3"
        >
          {/* Full Gallery Heading */}

          {/* Two Smaller Images */}
          <div className="flex flex-col">
            <img
              src={img1}
              loading="lazy"
              alt="Gallery 1"
              className="lg:w-[250px] object-cover  shadow-sm"
            />
          </div>
        </motion.div>
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={img3}
            loading="lazy"
            alt="Main"
            className="w-[785px] h-[450px]  object-cover  shadow-sm"
          />
        </div>
      </div>
      <motion.div
        variants={fadeInUp}
        className="max-w-6xl m-auto px-4 grid lg:grid-cols-4 grid-cols-2 gap-6 mt-28 text-black "
      >
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-4xl text-2xl font-semibold">200+</h1>
          <p className="text-xl">Successful Projects</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-4xl text-2xl font-semibold">$5k - $8k</h1>
          <p className="text-xl">Total Earnings</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-4xl text-2xl font-semibold">10,000+</h1>
          <p className="text-xl">Happy Clients</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-4xl text-2xl font-semibold">8</h1>
          <p className="text-xl">
            Successful Years Of <br /> Capturing Life
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="max-w-6xl m-auto flex flex-col lg:flex-row gap-2"
      >
        {/* Right Section */}
        <div className="flex flex-col lg:flex-row gap-6 px-4 mt-28 lg:ml-[500px] flex-1">
          {/* Full Gallery Heading */}
          <div>
            <Link to='/contact' className="text-sm text-black font-semibold uppercase tracking-wider mb-2">
              SAY HELLO
            </Link>
            <div className="w-10 h-1 bg-red-600"></div>
          </div>

          {/* Two Smaller Images */}
          <div className="flex flex-col lg:flex-row  gap-4">
            <img
              src={img4}
              loading="lazy"
              alt="Gallery 1"
              className="lg:w-[250px] lg:h-[350px] object-cover shadow-sm"
            />
            <img
              src={img11}
              loading="lazy"
              alt="Gallery 2"
              className="lg:w-[250px] lg:h-[350px] object-cover  shadow-sm"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-4 flex flex-col items-left"
      >
        <h1
          className="text-4xl kanit-extralight lg:text-7xl my-4 mt-28 font-semibold tracking-lighter
                 text-neutral-800"
        >
          Enter the world through my lens and discover a fresh perspective on
          photography. I strive to create photographs that tell stories, evoke
          emotions, and reveal the beauty and complexity of life.
        </h1>
      </motion.div>
      <div className="max-w-7xl m-auto mt-28">
        <div className="flex px-4 flex-col lg:flex-row gap-4">
        <img
            src={img8}
            loading="lazy"
              alt="Gallery 1"
              className="lg:w-[350px] lg:h-[350px] object-cover shadow-sm"
          />
          <img
            src={img9}
            loading="lazy"
              alt="Gallery 1"
              className="lg:w-[550px] lg:h-[350px] object-cover shadow-sm"
          />
          <img
            src={img10}
            loading="lazy"
              alt="Gallery 1"
              className="lg:w-[350px] lg:h-[350px] object-cover shadow-sm"
            />
        </div>
        <div className="flex px-4 flex-col lg:flex-row gap-4 mt-4">
        <img
            src={gal1}
            loading="lazy"
              alt="Gallery 1"
              className="lg:w-[50%] lg:h-[350px] object-cover shadow-sm"
          />
          <img
            src={img12}
            loading="lazy"
              alt="Gallery 1"
              className="lg:w-[50%] lg:h-[350px] object-cover shadow-sm"
          />
        
        </div>
      </div>
    </motion.section>
  );
}
