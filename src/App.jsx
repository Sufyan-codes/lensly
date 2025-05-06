import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <Pricing />
      <Footer />
      
    </main>
  )
}