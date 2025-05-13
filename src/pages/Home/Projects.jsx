import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from "./assets/img1.png"
import img2 from "./assets/osman-rana-dI9KhXi0ooE-unsplash.jpg"
import img3 from "./assets/augustine-wong-V2LvMWtMkLA-unsplash.jpg"
import img4 from "./assets/robin-schreiner-7y4858E8PfA-unsplash.jpg"

const projects = [
  {
    title: 'Architecture',
    category: 'Nature',
    image: img1,
  },
  {
    title: 'Nature',
    category: 'Nature',
    image: img2,
  },
  {
    title: 'Interior',
    category: 'Editorial',
    image: img4,
  },
  {
    title: 'Product',
    category: 'Product',
    image: img3,
  },
];

const categories = ['Nature', 'Editorial', 'Beauty Product', 'Wild-life', 'Product'];

export default function ExemplaryProjects() {
  const [selectedCategory, setSelectedCategory] = useState('Editorial');

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
