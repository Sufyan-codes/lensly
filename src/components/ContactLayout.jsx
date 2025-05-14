import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact/Contact";


export default function ContactLayout() {
  return (
    <div>
      <Contact />

      <Outlet />
    </div>
  );
}
