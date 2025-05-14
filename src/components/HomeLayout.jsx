import React from "react";
import Home from "../pages/Home/Home"
import YearsOfSuccess from "../pages/Home/YearsOfSuccess";
import ExemplaryProjects from "../pages/Home/Projects";
import CategoriesSection from "../pages/Home/Categories";
import GallerySection from "../pages/Home/GallerySection";


export default function HomeLayout() {
  return (
    <div>
      <Home />
      <YearsOfSuccess />
      <ExemplaryProjects />
      <CategoriesSection />
      <GallerySection />
      
      
    </div>
  );
}
