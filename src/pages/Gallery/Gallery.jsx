import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../../public/assets/img1.png";
import img2 from "../../../public/assets/osman-rana-dI9KhXi0ooE-unsplash.jpg";
import img3 from "../../../public/assets/augustine-wong-V2LvMWtMkLA-unsplash.jpg";
import img4 from "../../../public/assets/153309-4-821edc1864f62bd20af9c33814176c71-720x540.jpg.webp";
import img5 from "../../../public/assets/chen-mizrach-_dMWJnEu7-E-unsplash.jpg";
import img6 from "../../../public/assets/1.jpeg";
import Galleries from "./Galleries";

const projects = [
 
 
  {
    title: "Wild-Life",
    category: "Editorial",
    image: img4,
  },
  {
    title: "Food",
    category: "Editorial",
    image: img5,
  },
  {
    title: "Beauty",
    category: "Editorial",
    image: img6,
  },

 
];


const categories = [
  "Nature",
  "Editorial",
  "Beauty Product",
  "Wild-life",
  "Product",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Editorial");

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "" || p.category === selectedCategory
  );
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
          GALLERY<span className="text-red-500">.</span>
        </motion.h1>
      </div>

      <section className="">
        {/* Swiper Slider */}
        <Swiper
          className="!w-full"
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group lg:px-1 px-4 overflow-hidden  shadow hover:shadow-xl transition">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-[700px] h-[300px] object-cover"
                />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Controls */}
        <div className="max-w-3xl m-auto flex gap-6 ml-4 items-center mt-6 text-sm uppercase font-semibold text-gray-700">
          <button className="border-t-2 border-red-500 text-neutral-800">
            PREV
          </button>
          <button className="border-b-2 border-red-500 text-neutral-800">
            NEXT
          </button>
        </div>
      </section>

      <Galleries />

      <motion.div
        variants={fadeInUp}
        className=" grid grid-cols-1 md:grid-cols-2 gap-1 mx-4 mt-4"
      >
        <img className="w-full h-[400px]" src={img4} alt=""  loading="lazy" />
        <img className="w-full h-[400px]" src={img5} alt=""  loading="lazy" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="text-center  text-black mx-4 mt-12"
      >
        <h2 className="lg:text-2xl text-xl">BEAUTIFUL MOMENT IS EVERYTHING</h2>
        <h1 className="mt-4 text-xl lg:text-6xl">Enter the world through my <br />
          lens and discover a fresh <br />
          perspective on photography.</h1>
          <motion.div
      variants={fadeInUp}  className=' grid grid-cols-1 md:grid-cols-3 gap-1 mx-4 mt-8'>
        <img className='' src={img1} width={400} height={300} alt=""  loading="lazy" />
        <img className='' src={img2} width={400} height={300} alt=""  loading="lazy" />
        <img className='' src={img3} width={400} height={300} alt=""  loading="lazy" />
      </motion.div>
      </motion.div>

      
    </motion.section>
  );
}
