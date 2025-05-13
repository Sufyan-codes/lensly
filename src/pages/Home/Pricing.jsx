import React from 'react'
import { motion } from 'framer-motion'


export default function Pricing() {
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            }
        })
    }
  return (
      <section id='projects'>
          <div  className='max-w-7xl mx-auto px-4 mt-20'>
          <motion.div
          className='text-center mb-12 '
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{duration:0.6,ease: 'easeOut'}}
              >
                  <h2 className='text-3xl lg:text-5xl mt-20 tracking-tighter
              bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600
              bg-clip-text text-transparent'>
                      {PLANS_CONTENT.sectionTitle}
                  </h2>
                  <p className='mt-4'>{ PLANS_CONTENT.sectionDescription }</p>
              </motion.div>
              
              <motion.div
                  initial='hidden'
                  whileInView='visible'
                  variants={
                      {
                          visible: {
                              transition: {
                                  straggerChildren: 0.5,
                              }
                          }
                      }
                  }
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
              >
                  
                      <motion.div 
                          
                          variants={childVariants}
                          className={`p-8 rounded-xl shadow-lg  bg-neutral-950 border border-blue-900/80 border border-neutral-800"
                          }`}
                      >
                        
                          <h3 className='text-lg lg:text-xl mb-4 tracking-tighter uppercase'>
                            Space-Exploration
                          </h3>
                          <p className='text-neutral-400 mb-6'>
                              A sleek and user friendly multiple page space-exploration agency
                      </p>
                      <img className='rounded' src={space} alt="" />
                          
                          <ul className='mb-8 mt-4 space-y-2 text-neutral-400'>
                              
                                  <li className='flex items-center'>
                                      <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                          
                                      </span>
                                      12+ pages Built with React router 6
                          </li>
                          <li className='flex items-center'>
                                      <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                          
                                      </span>
                                     Dynamic contents
                          </li>
                          <li className='flex items-center'>
                                      <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                          
                                      </span>
                                      Sleek Design and animations with framer motion
                          </li>
                          <li className='flex items-center'>
                                      <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                          
                                      </span>
                                      Utilized miragejs to fetch and query data
                                  </li>
                            
                          </ul>
                      <a href="https://space-booking-app.netlify.app">
                      <button className='w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 rounded-lg'>
                            View Live Demo
                            </button>
                          </a>
                  </motion.div>
                  <motion.div 
                          
                          variants={childVariants}
                          className={`p-8 rounded-xl shadow-lg  bg-neutral-950 border border-blue-900/80 border border-neutral-800"
                          }`}
                      >
                        
                          <h3 className='text-lg lg:text-xl mb-4 tracking-tighter uppercase'>
                            Chalatix-Agency
                          </h3>
                          <p className='text-neutral-400 mb-6'>
                              A modern and user friendly business agency landing page 
                      </p>
                      <img className='rounded' src={chalatix} alt="" />
                          
                           
                      <ul className='mb-8 mt-4 space-y-2 text-neutral-400'>
                              
                              <li className='flex items-center'>
                                  <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                      
                                  </span>
                                  A React and tailwind landing page
                      </li>
                      <li className='flex items-center'>
                                  <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                      
                                  </span>
                                  Sleek Design and animations with framer motion
                      </li>
                      <li className='flex items-center'>
                                  <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                      
                                  </span>
                                  Fully responsive on all devices
                          </li>
                       
                          <li className='flex items-center'>
                                      <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                          
                                      </span>
                                      Modern Design
                          </li>
                        
                      </ul>
                  <a href="https://chalatix.netlify.app/">
                  <button className='w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 rounded-lg'>
                        View Live Demo
                        </button>
                      </a>
                  </motion.div>
                  <motion.div 
                          
                          variants={childVariants}
                          className={`p-8 rounded-xl shadow-lg  bg-neutral-950 border border-blue-900/80 border border-neutral-800"
                          }`}
                      >
                        
                          <h3 className='text-lg lg:text-xl mb-4 tracking-tighter uppercase'>
                            photostudio
                          </h3>
                          <p className='text-neutral-400 mb-6'>
                              A Beautiful and user friendly single page photostudio  agency landing page
                      </p>
                      <img className='rounded' src={photo} alt="" />
                          
                      <ul className='mb-8 mt-4 space-y-2 text-neutral-400'>
                              
                              <li className='flex items-center'>
                                  <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                      
                                  </span>
                                  A HTML, CSS and tailwind landing page
                      </li>
                      <li className='flex items-center'>
                                  <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                      
                                  </span>
                                  Sleek Design and animations with framer motion
                      </li>
                      <li className='flex items-center'>
                                  <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                      
                                  </span>
                                  Fully responsive on all devices
                          </li>
                         
                          <li className='flex items-center'>
                                      <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                          
                                      </span>
                                      Modern Design
                          </li>
                        
                      </ul>
                  <a href="https://photolanding.netlify.app/">
                  <button className='w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 rounded-lg'>
                        View Live Demo
                        </button>
                      </a>
                      </motion.div>
                  
              </motion.div>
</div>
</section>
  )
}
