import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import YearsOfSuccess from "./pages/Home/YearsOfSuccess";
import Projects from "./pages/Home/Projects";
import Categories from "./pages/Home/Categories";
import Footer from "./components/Footer";
import NewsletterSection from "./pages/Home/NewsletterSection";
import InstagramSection from "./pages/Home/InstagramSection";
import GallerySection from "./pages/Home/GallerySection";
import Layout from "./components/Layout";
import HomeLayout from "./pages/Home/HomeLayout";
import Team from "./pages/Team/Team";
import TeamLayout from "./components/TeamLayout";
import Contact from "./pages/Contact/Contact";
import ContactLayout from "./components/ContactLayout";
import AboutLayout from "./components/AboutLayout";

export default function App() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeLayout />} />
            <Route path="/team" element={<TeamLayout />} />
            <Route path="/contact" element={<ContactLayout />} />
            <Route path="/about" element={<AboutLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
