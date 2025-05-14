  
import React, { useState } from 'react';
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
import img12 from "../../../public/assets/skyler-ewing-EFSNRCayX8w-unsplash.jpg"
 
export const categories = [
    'Nature',
    'Editorial',
    'Beauty Product',
    'Wild-life',
    'Product'
  ];
  
  export const items = [
    {
      id: 1,
      title: 'Nature',
      image: img1,
      category: 'Nature'
    },
    {
      id: 2,
      title: 'Nature',
      image: img8,
      category: 'Nature'
    },
    {
      id: 3,
      title: 'Nature',
      image: img12,
      category: 'Nature'
    },
    {
      id: 4,
      title: 'Beauty Product',
      image: img4,
      category: 'Beauty Product'
    },
    {
      id: 5,
      title: 'Beauty Product',
      image: img5,
      category: 'Beauty Product'
    },
    {
      id: 6,
      title: 'Beauty Product',
      image: img6,
      category: 'Beauty Product'
    },
    {
      id: 7,
      title: 'Beauty Product',
      image: img7,
      category: 'Beauty Product'
    },
    {
      id: 8,
      title: 'Product',
      image: img11,
      category: 'Product'
    },
    {
      id: 8,
      title: 'Wild-life',
      image: img10,
      category: 'Wild-life'
    },
    {
      id: 9,
      title: 'Nature',
      image: img9,
      category: 'Nature'
    },
    // More photos for load more...
  ];

  
  export default function Galleries() {
    const [activeCategory, setActiveCategory] = useState('Beauty Product');
    const [visibleCount, setVisibleCount] = useState(4);
  
    const filteredItems = items
      .filter((item) => activeCategory === '' || item.category === activeCategory)
      .slice(0, visibleCount);
  
  
      return (
        <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-end mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm border transition ${
                  activeCategory === cat
                    ? 'border-red-500 text-red-500'
                    : 'border-gray-300 text-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
    
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="rounded-md object-cover w-full h-72"
                />
                <div className="flex justify-between items-center mt-2">
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <span className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-500">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
    
          {/* Load More */}
          {visibleCount < items.length && (
            <div className="mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 2)}
                className="text-sm font-semibold uppercase border-t-2 border-red-500 text-neutral-800 hover:text-red-500"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      );
  }
  