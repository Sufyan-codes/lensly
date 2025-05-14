import React from "react";
import img1 from "../../../public/assets/user1.jpeg";
import img2 from "../../../public/assets/user2.jpeg";
import img3 from "../../../public/assets/user3.jpeg";
import img4 from "../../../public/assets/user4.jpeg";
import img5 from "../../../public/assets/user5.jpeg";
import img6 from "../../../public/assets/user6.jpeg";
import { motion } from "framer-motion";

export default function Team() {
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
          className="text-5xl kanit-extralight lg:text-9xl my-4 font-semibold tracking-lighter
             text-neutral-800"
        >
          TEAM<span className="text-red-500">.</span>
        </motion.h1>
      </div>
      <motion.div
        variants={fadeInUp}
        className="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 px-6 lg:grid-cols-3  gap-2 mt-4"
      >
      
        <div className="relative">
          <img src={img1} alt="Fox" className="w-[350px] h-[350px] object-cover"loading="lazy" />
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-12 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">kelly jones</h3>
            <p className=" text-center font-bold text-black leading-tight mt-2">Photographer</p>
          </div>
        </div>
        <div className="relative">
          <img src={img2}  alt="Fox" className="w-[350px] h-[350px] object-cover "loading="lazy" />
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-12 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Sameer Ahmad</h3>
            <p className=" text-center font-bold text-black leading-tight mt-2">Graphic Designer</p>
          </div>
        </div>
        <div className="relative">
          <img src={img3}  alt="Fox" className="w-[350px] h-[350px] object-cover "loading="lazy" />
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-12 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Jessica Burgers</h3>
            <p className=" text-center font-bold text-black leading-tight mt-2">Photographer</p>
          </div>
        </div>
        <div className="relative">
          <img src={img4}  alt="Fox" className="w-[350px] h-[350px] object-cover " loading="lazy"/>
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-12 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Jane Doe</h3>
            <p className=" text-center font-bold text-black leading-tight mt-2">HR</p>
          </div>
        </div>
        <div className="relative">
          <img src={img5}  alt="Fox" className="w-[350px] h-[350px] object-cover " loading="lazy"/>
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-12 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Sofia Cheng</h3>
            <p className=" text-center font-bold text-black leading-tight mt-2">Vediographer</p>
          </div>
        </div>
        <div className="relative">
          <img src={img6}  alt="Fox" className="w-[350px] h-[350px] object-cover "  loading="lazy"/>
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-12 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Jon jones</h3>
            <p className=" text-center font-bold text-black leading-tight mt-2">drone Operator</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
