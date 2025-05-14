import React from 'react'
import { motion } from "framer-motion";

export default function Contact() {
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
          CONTACT<span className="text-red-500">.</span>
        </motion.h1>
      </div>
      <motion.div
        variants={fadeInUp}
        className="max-w-6xl m-auto bg-black lg:p-28 p-10 mt-4"
      >
      
        
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:gap-20 gap-4'>
        <input className='bg-black border-b text-white py-4' type="text" placeholder='ALISON BURGERS' />
          <input type="email" placeholder='EMAIL ADDRESS'  className='bg-black py-4  border-b' />
          <input type="number" placeholder='PHONE NUMBER'  className='bg-black py-4 border-b' />
          <input type="text" placeholder='SUBJECT'  className='bg-black py-4 border-b' />
         </div>
        <input className='bg-black border-b mt-2 py-20 w-full' type="text" placeholder='MESSAGE' />
        <button className='mt-14 font-semibold text-white kanit-extralight border-b-2 border-red-500 text-neutral-800 lg:text-xl'>SEND MESSAGE</button>
      
    
      </motion.div>
    </motion.section>
  );
}
