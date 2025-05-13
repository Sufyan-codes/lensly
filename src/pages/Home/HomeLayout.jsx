import React from "react";
import Home from "./Home";
import YearsOfSuccess from "./YearsOfSuccess";
import ExemplaryProjects from "./Projects";
import CategoriesSection from "./Categories";
import GallerySection from "./GallerySection";
import InstagramSection from "./InstagramSection";
import NewsletterSection from "./NewsletterSection";

export default function HomeLayout() {
  return (
    <div>
      <Home />
      <YearsOfSuccess />
      <ExemplaryProjects />
      <CategoriesSection />
      <GallerySection />
      <InstagramSection />
      <NewsletterSection />
    </div>
  );
}
