import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from "../../../public/assets/img1.png"
import img2 from "../../../public/assets/osman-rana-dI9KhXi0ooE-unsplash.jpg"
import img3 from "../../../public/assets/augustine-wong-V2LvMWtMkLA-unsplash.jpg"
import img4 from "../../../public/assets/1.jpeg"
import img5 from "../../../public/assets/2.jpeg"
import img6 from "../../../public/assets/3.jpeg"
import img7 from "../../../public/assets/4.jpeg"
import img8 from "../../../public/assets/hert-niks-tyI1b2abVKE-unsplash.jpg"
import img9 from "../../../public/assets/153309-4-821edc1864f62bd20af9c33814176c71-720x540.jpg.webp"
import img10 from "../../../public/assets/nathalie-ehrnleitner-SApQiu5GIdQ-unsplash.jpg"
import img11 from "../../../public/assets/gourmet-lenz-punldnEiUtc-unsplash.jpg"


const projects = [
  {
    title: 'Nature',
    category: 'Nature',
    image: img8,
  },
  {
    title: 'Nature',
    category: 'Nature',
    image: img9,
  },
  {
    title: 'Interior',
    category: 'Interior',
    image: img4,
  },
  {
    title: 'Product',
    category: 'Product', 
    image: img3,
  },
  {
    title: 'Beauty Product',
    category: 'Beauty Product', 
    image: img4,
  },
  {
    title: 'Beauty Product',
    category: 'Beauty Product', 
    image: img5,
  },
  {
    title: 'Beauty Product',
    category: 'Beauty Product', 
    image: img6,
  },
  {
    title: 'Beauty Product',
    category: 'Beauty Product', 
    image: img7,
  },
  {
    title: 'Wild-life',
    category: 'Wild-life', 
    image: img10,
  },
  {
    title: 'Product',
    category: 'Product', 
    image: img11,
  },
];

const categories = ['Beauty Product', 'Interior', 'Nature', 'Wild-life', 'Product'];

export default function ExemplaryProjects() {
  const [selectedCategory, setSelectedCategory] = useState('Beauty Product');

  const filteredProjects = projects.filter(
    (p) => selectedCategory === '' || p.category === selectedCategory
  );

  return (
    <section className="max-w-6xl m-auto px-6 py-16">
      {/* Header */}
      <div className="flex flex-col items-center  sm:flex-row sm:items-end sm:justify-between mb-6">
        <div>
          <h2 className="text-4xl font-semibold kanit-regular text-neutral-800">Exemplary <br /> Projects<span className="text-red-600">.</span></h2>
          <p className="mt-2 text-xs tracking-widest uppercase text-gray-500">23 ITEMS</p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-6 sm:mt-0 w-[320px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm border ${
                selectedCategory === cat
                  ? 'border-red-500 text-red-500'
                  : 'border-gray-300 text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

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
      <div className="group overflow-hidden rounded-md shadow hover:shadow-xl transition">
        <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
        <div className="flex justify-between items-center mt-2 px-1">
          <h4 className="text-lg font-medium text-neutral-800">{project.title}</h4>
          <span className="text-xs px-3 py-1 rounded-full border border-gray-400 text-gray-500">
            {project.category}
          </span>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      {/* Pagination Controls */}
      <div className="flex gap-6 items-center mt-6 text-sm uppercase font-semibold text-gray-700">
        <button className="border-t-2 border-red-500 text-neutral-800">PREV</button>
        <button className="border-b-2 border-red-500 text-neutral-800">NEXT</button>
      </div>
    </section>
  );
}
