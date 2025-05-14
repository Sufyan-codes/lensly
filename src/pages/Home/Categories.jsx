import React from 'react';
import img1 from "../../../public/assets/1.jpeg"
import img2 from "../../../public/assets/nathalie-ehrnleitner-SApQiu5GIdQ-unsplash.jpg"
import img3 from "../../../public/assets/gourmet-lenz-punldnEiUtc-unsplash.jpg"
import img4 from "../../../public/assets/hert-niks-tyI1b2abVKE-unsplash.jpg"
import img5 from "../../../public/assets/declan-sun-5se_ixwdxNc-unsplash.jpg"
import img6 from "../../../public/assets/crystal-jo-TWTxHN2QIGc-unsplash.jpg"
import img7 from "../../../public/assets/4.jpeg"

import img9 from "../../../public/assets/153309-4-821edc1864f62bd20af9c33814176c71-720x540.jpg.webp"

import {motion} from 'framer-motion'


export default function CategoriesSection() {
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
      className="px-6 py-16 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl kanit-regular font-semibold text-neutral-900 mb-10">
        Categories<span className="text-red-600">.</span>
      </h2>

      <motion.div
        variants={fadeInUp}
        className="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 px-6 lg:grid-cols-3  gap-2 mt-4"
      >
      
        <div className="relative ">
          <img src={img1} alt="Fox" className="w-[350px] h-[350px] object-cover"  loading="lazy" />
          <div className="absolute bottom-1  bg-white/80 w-[250px] h-[100px] m-auto ml-10 px-4 py-4 ">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Beauty</h3>
           
          </div>
        </div>
        <div className="relative">
          <img src={img2}  alt="Fox" className="w-[350px] h-[350px] object-cover "  loading="lazy" />
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-10 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Wild life</h3>
            
          </div>
        </div>
        <div className="relative">
          <img src={img3}  alt="Fox" className="w-[350px] h-[350px] object-cover "  loading="lazy" />
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-10 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Products</h3>
           
          </div>
        </div>
        <div className="relative">
          <img src={img4}  alt="Fox" className="w-[350px] h-[350px] object-cover "  loading="lazy" />
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-10 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Nature</h3>
        
          </div>
        </div>
        <div className="relative">
          <img src={img5}  alt="Fox" className="w-[350px] h-[350px] object-cover "  loading="lazy" />
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-10 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Interior</h3>
            
          </div>
        </div>
        <div className="relative">
          <img src={img6}  alt="Fox" className="w-[350px] h-[350px] object-cover "  loading="lazy" />
          <div className="absolute bottom-1  bg-white/80  w-[250px] h-[100px] m-auto ml-10 px-4 py-4">
            <h3 className="lg:text-2xl text-xl text-center font-bold text-black leading-tight mt-4">Food</h3>
     
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
