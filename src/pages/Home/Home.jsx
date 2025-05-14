import React from 'react'
import img1 from "../../../public/assets/1.jpeg"
import img2 from "../../../public/assets/hert-niks-tyI1b2abVKE-unsplash.jpg"
import img3 from "../../../public/assets/yoav-aziz-AiHJiRCwB3w-unsplash.jpg"

import {motion} from 'framer-motion'

export default function Home() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {opacity:1, transition: {straggerChildren: 0.2}},
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {opacity: 1, y:0 , transition: {duration: 0.6}}
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {opacity: 1, transition: {duration: 0.6}}
  }

  return (
    <motion.section
      id='home'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='pt-28 lg:pt-36'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col items-left'>
     
        <motion.h1
          variants={fadeInUp}
          className='text-5xl kanit-extralight lg:text-9xl my-4 font-semibold tracking-lighter
         text-neutral-800'>
          CAPTURE LIFE<span className='text-red-500'>.</span>
        </motion.h1>
       
      </div>
      <motion.div
      variants={fadeInUp}  className=' grid grid-cols-1 md:grid-cols-3 gap-1 mx-4 mt-4'>
        <img className='w-[400px] h-[400px]' src={img1}  alt=""  loading="lazy" />
        <img className='w-[400px] h-[400px]' src={img2}  alt=""  loading="lazy" />
        <img className='w-[400px] h-[400px]' src={img3}  alt=""  loading="lazy" />
      </motion.div>

      
    </motion.section>
  )
}




