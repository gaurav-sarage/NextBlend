import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CallToAction from "./components/CTA";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <CallToAction />
    </div>
  )
};