import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomeLayout from "./components/HomeLayout";
import TeamLayout from "./components/TeamLayout";
import ContactLayout from "./components/ContactLayout";
import AboutLayout from "./components/AboutLayout";
import GalleryLayout from "./components/GalleryLayout";

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
            <Route path="/gallery" element={<GalleryLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
