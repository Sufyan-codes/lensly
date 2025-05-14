import React from "react";
import { Outlet } from "react-router-dom";
import About from "../pages/About/About";

export default function AboutLayout() {
  return (
    <div>
      <About />
      <Outlet />
    </div>
  );
}
