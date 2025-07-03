import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Features from "../pages/Features";
import Investment from "../pages/Investment";
import Business from "../pages/Business";
import Cta from "../pages/Cta";
import Footer from "./Footer";

export default function Layout() {
  return (
    <section>
      <Nav />
      <Outlet />
      <Features />
      <Investment />
      <Business />
      <Cta />
      <Footer />
    </section>
  );
}
