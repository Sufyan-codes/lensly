import React from 'react';
import img1 from "./assets/img1.png"
import img2 from "./assets/osman-rana-dI9KhXi0ooE-unsplash.jpg"
import img3 from "./assets/augustine-wong-V2LvMWtMkLA-unsplash.jpg"
import img4 from "./assets/robin-schreiner-7y4858E8PfA-unsplash.jpg"

export default function InstagramSection() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl kanit-regular sm:text-4xl font-medium text-black mb-6">
        Follow Us On<br />Instagram<span className="text-red-600">.</span>
      </h2>

      <div className="grid grid-cols-3 gap-4 relative items-center">
        <img src={img1} alt="Insta 1" className="rounded-md object-cover" />
        
        {/* Instagram bubble */}
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-full px-6 py-4 text-lg font-bold">
            Instagram
          </div>
        </div>

        <img src={img3} alt="Insta 3" className="rounded-md object-cover" />
      </div>
    </section>
  );
}
