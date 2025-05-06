import React from 'react'
import { HOW_IT_WORKS_CONTENT } from '../constants'
import {motion} from 'framer-motion'

export default function HowItWorks() {
  

        const stepVariants = {
            hidden: { opacity: 0, y: 50 },
            visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.2,
                    duration: 0.6,
                    ease: "easeOut"
                }
            })
      }

    return (
    <section id='about'>
          <div className='max-w-7xl mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration:0.6, ease:"easeOut"}}
                    className='text-center mb-12 '>
                  <h2 className='text-3xl lg:text-5xl mt-20 tracking-tighter 
                bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600
                bg-clip-text text-transparent'>
                      About Me
                  </h2>
                </motion.div>    
                
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            }
                        }
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                  
                      <motion.div
                         
                          
                          className='p-6 rounded-xl shadow-lg
                      flex flex-col justify-between'>
                          <div>
                              <h3 className='lg:text-3xl font-semibold mb-4'>
                              Background
                              </h3>
                              <p className='text-neutral-400 lg:text-xl mb-4'>
                              I'm a Frontend Developer with a background in Bsc. Mathematics from Federal University Dutse. My journey in tech began when i took a C++ course and data structures and algorithms changed my perspective on tech and developed curiosty which has been driven by a passion for creating intuitive and impactful digital experiences.
                              </p>
                              <p className='text-neutral-400 lg:text-xl mb-4'>
                              Currently, I'm expanding my skill set by studying Backend Development, where I'm learning to build full-stack applications and robust server-side solutions and build a startup one day.
                              </p>

                          </div>
                        
                         
                    </motion.div>
                    <motion.div
                         
                          
                         className='p-6 rounded-xl shadow-lg
                     flex flex-col justify-between'>
                        <div className='flex flex-col gap-2'>
                            <div className=''>
                                
                             <h3 className='lg:text-3xl font-semibold mb-4'>
                             Education
                             </h3>
                             <p className='text-neutral-400 lg:text-xl font-semibold mb-2'>
                             Bsc. Mathematics
                            </p>
                            <p>Federal University Dutse</p>
                            <span className='text-neutral'>2021</span>
                            
                            </div>
                            <div>
                            <p className='text-neutral-400 lg:text-xl font-semibold mb-2'>
                             Backend Development
                            </p>
                            <p>Alx school Software engineering</p>
                            <span className='text-neutral'>2024</span>
                            
                            </div>

                            <div>
                                <h3 className='lg:text-3xl font-semibold mb-4'>Technical Skills</h3>
                                <div className='flex  lg:flex-cols-2  gap-4'>
                                <div className='w-72 rounded-lg p-5 bg-neutral-800 flex flex-col gap-4'>
                                    <h2>Frontend</h2>
                                    <ul className='flex flex-col gap-2'>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>Javascript</li>
                                        <li>React</li>
                                    </ul>
                                    </div>
                                    <div className='w-72 rounded-lg p-5 bg-neutral-800 flex flex-col gap-4'>
                                    <h2>Tools & Others</h2>
                                    <ul className='flex flex-col gap-2'>
                                        <li>Git & Github</li>
                                        <li>Tailwind CSS</li>
                                        <li>Figma</li>
                                        <li>Adobe xd</li>
                                    </ul>
                                </div>
                               </div>
                            </div>


                         </div>
                       
                        
                     </motion.div>
                  
              </motion.div>
          </div>
    </section>
  )
}
