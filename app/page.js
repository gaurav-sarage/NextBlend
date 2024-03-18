import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Toolkit from "./components/Toolkit";
import CallToAction from "./components/CTA";
import Features from "./components/Features";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Toolkit />
      <CallToAction />
    </div>
  )
};