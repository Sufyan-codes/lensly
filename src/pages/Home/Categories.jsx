import React from 'react';
import img1 from "./assets/hert-niks-tyI1b2abVKE-unsplash.jpg"
import img2 from "./assets/atul-pandey-aIa8Oz29Kzc-unsplash.jpg"
import img3 from "./assets/by-pils-_h21upxRWv4-unsplash.jpg"
import img4 from "./assets/skyler-ewing-EFSNRCayX8w-unsplash.jpg"
import img5 from "./assets/lia-maaskant-RV8SNyLhQ6Q-unsplash.jpg"


export default function CategoriesSection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl kanit-regular font-semibold text-neutral-900 mb-10">
        Categories<span className="text-red-600">.</span>
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {/* Image 1 */}
        <div className="relative">
          <img src={img1} alt="Bird" className="w-[250px] h-[250px] object-cover rounded-md" />
        </div>

        {/* Image 2 */}
        <div className="relative sm:translate-y-10">
          <img src={img2} alt="Leaves" className="w-[250px] h-[250px] object-cover rounded-md" />
        </div>

        {/* Image 3 */}
        <div className="relative lg:translate-y-20">
          <img src={img3} alt="Bridge" className="w-[250px] h-[250px] object-cover rounded-md" />
        </div>

        {/* Image 4 */}
        <div className="relative">
          <img src={img4} alt="Fox" className="w-[250px] h-[250px] object-cover rounded-md" />
          {/* Overlay Text */}
          <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded">
            <h3 className="text-xl font-bold text-black leading-tight">Wild<br />Photography</h3>
          </div>
        </div>

        {/* Image 5 */}
        <div className="relative sm:translate-y-10">
          <img src={img5} alt="Plant" className="w-[250px] h-[250px] object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}
