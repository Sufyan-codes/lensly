import React from 'react'
import img1 from "../../../public/assets/img1.png"
import img2 from "../../../public/assets/osman-rana-dI9KhXi0ooE-unsplash.jpg"
import img3 from "../../../public/assets/augustine-wong-V2LvMWtMkLA-unsplash.jpg"

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
        <img className='' src={img1} width={400} height={200} alt=""  loading="lazy" />
        <img className='' src={img2} width={400} height={400} alt=""  loading="lazy" />
        <img className='' src={img3} width={400} height={400} alt=""  loading="lazy" />
      </motion.div>

      
    </motion.section>
  )
}




