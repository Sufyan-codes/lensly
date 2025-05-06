import React from 'react'
import { BRAND_LOGOS, HERO_CONTENT} from "../constants"
import heroImage from "../assets/hero.jpg"
import {motion} from 'framer-motion'

export default function HeroSection() {

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
      <div className='max-w-7xl mx-auto px-4 flex flex-col items-center
      text-center'>
        <motion.div
          variants={fadeInUp}
          className='mb-8 border-neutral-800 px-3 py-2 rounded-full
        text-xs'>
          {HERO_CONTENT.badgeText}
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className='text-5xl lg:text-8xl my-4 font-semibold tracking-lighter
        bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700
        bg-clip-text text-transparent'>
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className='mt-6 text-neutral-400 max-w-xl'>
          {HERO_CONTENT.subHeading}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className='mt-6 space-x-4'>
          <a href="#projects" className='inline-block bg-purple-600 hover:bg-purple-500
            text-white py-3 px-6 rounded-lg font-medium'>
            {HERO_CONTENT.callToAction.primary}
          </a>
         
        </motion.div>

      

       
      </div>
    </motion.section>
  )
}
