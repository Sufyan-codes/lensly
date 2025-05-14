import React from "react";
import { Outlet } from "react-router-dom";
import Gallery from "../pages/Gallery/Gallery";


export default function GalleryLayout() {
  return (
    <div>
      <Gallery />
      <Outlet />
    </div>
  );
}
