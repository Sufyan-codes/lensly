import { motion } from 'framer-motion'
import React from 'react'
import { KEY_FEATURES_CONTENT } from "../constants"
import html from "../assets/html-1.svg"
import css from "../assets/css-3.svg"
import js from "../assets/logo-javascript.svg"
import react from "../assets/react-2.svg"
import git from "../assets/git-icon.svg"
import tailwind from "../assets/tailwind-css.svg"
export default function KeyFeatures() {
    
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    straggerChildren: 0.2,
                    when: "beforeChildren",
                }
            }
          }
    
    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }
  
    return (
        <section id=''>
            <div className='max-w-7xl mx-auto px-4 mt-20'>
                <div className='text-center mb-12 '>
                    <h2 className='text-3xl lg:text-5xl mt-20 tracking-tighter 
                    bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600
                    bg-clip-text text-transparent'>
                        {KEY_FEATURES_CONTENT.sectionTitle}
                    </h2>
                    <p className='mt-4'>
                        {KEY_FEATURES_CONTENT.sectionDescription}
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-wrap justify-center'>
                    
                        <motion.div className='flex flex-col items-center
                        text-center w-full md:w-1/2 lg:w-1/3 p-6'
                            variants={KeyFeatures}>
                            <div className='flex justify-center items-center mb-4'>
                              
                            <img src={html} className='h-8 w-8' alt="" />
                                
                            </div>
                            <h3 className='text-xl'>HTML</h3>
                                <p className='mt-2 text-neutral-400'></p>
                    </motion.div>
                    <motion.div className='flex flex-col items-center
                        text-center w-full md:w-1/2 lg:w-1/3 p-6'
                            variants={KeyFeatures}>
                            <div className='flex justify-center items-center mb-4'>
                              
                            <img src={css} className='h-8 w-8' alt="" />
                                
                            </div>
                            <h3 className='text-xl'>CSS</h3>
                                <p className='mt-2 text-neutral-400'></p>
                    </motion.div>
                    <motion.div className='flex flex-col items-center
                        text-center w-full md:w-1/2 lg:w-1/3 p-6'
                            variants={KeyFeatures}>
                            <div className='flex justify-center items-center mb-4'>
                              
                            <img src={js} className='h-8 w-8' alt="" />
                                
                            </div>
                            <h3 className='text-xl'>Javascript</h3>
                                <p className='mt-2 text-neutral-400'></p>
                    </motion.div>
                    <motion.div className='flex flex-col items-center
                        text-center w-full md:w-1/2 lg:w-1/3 p-6'
                            variants={KeyFeatures}>
                            <div className='flex justify-center items-center mb-4'>
                              
                            <img src={react} className='h-8 w-8' alt="" />
                                
                            </div>
                            <h3 className='text-xl'>React</h3>
                                <p className='mt-2 text-neutral-400'></p>
                    </motion.div>
                    <motion.div className='flex flex-col items-center
                        text-center w-full md:w-1/2 lg:w-1/3 p-6'
                            variants={KeyFeatures}>
                            <div className='flex justify-center items-center mb-4'>
                              
                            <img src={tailwind} className='h-8 w-8' alt="" />
                                
                            </div>
                            <h3 className='text-xl'>Tailwind css</h3>
                                <p className='mt-2 text-neutral-400'></p>
                        </motion.div> <motion.div className='flex flex-col items-center
                        text-center w-full md:w-1/2 lg:w-1/3 p-6'
                            variants={KeyFeatures}>
                            <div className='flex justify-center items-center mb-4'>
                              
                            <img src={git} className='h-8 w-8' alt="" />
                                
                            </div>
                            <h3 className='text-xl'>Git</h3>
                                <p className='mt-2 text-neutral-400'></p>
                        </motion.div>
                    
                    </motion.div>
            </div>
        </section>
  )
}
