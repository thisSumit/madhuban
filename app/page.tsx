import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Venue from "@/components/Venue";
import Testimonials from "@/components/Testimonials";
import Gallary from "@/components/Gallary";
import Footer from "@/components/Footer";
import Image from "next/image";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Info/>
      <Gallary/>
      <Venue/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
