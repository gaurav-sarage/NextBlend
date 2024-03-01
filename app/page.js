import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Toolkit from "./components/Toolkit";
import CallToAction from "./components/CTA";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <Toolkit />
      <CallToAction />
    </div>
  )
};