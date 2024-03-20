import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CallToAction from "./components/CTA";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <Feature />
      <CallToAction />
      <Footer />
    </div>
  )
};